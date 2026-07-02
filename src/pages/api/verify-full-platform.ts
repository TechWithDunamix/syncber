import type { APIRoute } from "astro";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const prerender = false;

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

const COURSE_CATALOG: Record<string, { title: string; price: number }> = {
  "iam-pam-professional": { title: "IAM & PAM Professional", price: 49.99 },
  "full-stack-development": { title: "Full Stack Web Development", price: 49.99 },
  "python-programming": { title: "Python Programming", price: 49.99 },
  "cloud-engineering": { title: "Cloud Engineering", price: 49.99 },
  "cybersecurity": { title: "Cybersecurity", price: 49.99 },
  "data-science-ml": { title: "Data Science & ML", price: 49.99 },
  "devops-cicd": { title: "DevOps & CI/CD", price: 49.99 },
  "mobile-app-development": { title: "Mobile App Development", price: 49.99 },
};

export const GET: APIRoute = async ({ url }) => {
  try {
    const sessionId = url.searchParams.get("session_id");
    if (!sessionId) {
      return new Response(JSON.stringify({ verified: false, error: "Missing session_id" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const serviceRoleKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceRoleKey) {
      return new Response(
        JSON.stringify({ verified: false, error: "Supabase service role key not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const sbAdmin = createClient(import.meta.env.PUBLIC_SUPABASE_URL, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new Response(JSON.stringify({ verified: false, error: "Payment not completed" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const userId = session.metadata?.userId;
    if (!userId) {
      return new Response(JSON.stringify({ verified: false, error: "Missing userId in session metadata" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const amount = (session.amount_total || 0) / 100;

    // Resolve the list of courses from metadata or fall back to all courses
    const courseIds = session.metadata?.courses
      ? session.metadata.courses.split(",").map((s) => s.trim()).filter(Boolean)
      : Object.keys(COURSE_CATALOG);

    // Build enrollment rows from the course list
    const enrollmentRows = courseIds
      .map((cid) => {
        const info = COURSE_CATALOG[cid];
        if (!info) return null;
        return {
          user_id: userId,
          course_id: cid,
          course_title: info.title,
          amount: info.price,
        };
      })
      .filter(Boolean) as {
      user_id: string;
      course_id: string;
      course_title: string;
      amount: number;
    }[];

    if (enrollmentRows.length === 0) {
      return new Response(JSON.stringify({ verified: false, error: "No valid courses found" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Batch upsert all course enrollments — already-enrolled ones are silently skipped
    const { error: enrollError } = await sbAdmin
      .from("enrollments")
      .upsert(enrollmentRows, { onConflict: "user_id,course_id", ignoreDuplicates: true });

    if (enrollError) {
      console.error("batch enrollment upsert error:", enrollError);
      return new Response(JSON.stringify({ verified: false, error: enrollError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Record the full-platform payment
    await sbAdmin
      .from("payments")
      .insert({
        user_id: userId,
        course_id: "full-platform",
        stripe_session_id: sessionId,
        stripe_payment_intent_id: session.payment_intent,
        amount,
        status: "completed",
        confirmed_at: new Date().toISOString(),
      })
      .catch(() => {});

    // Verify all courses were created
    const { data: enrollments } = await sbAdmin
      .from("enrollments")
      .select("course_id")
      .eq("user_id", userId)
      .in("course_id", courseIds);

    const enrolled = (enrollments || []).map((e: any) => e.course_id);

    return new Response(
      JSON.stringify({
        verified: true,
        userId,
        enrolled,
        courseCount: enrolled.length,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("verify-full-platform error:", err);
    return new Response(
      JSON.stringify({ verified: false, error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
