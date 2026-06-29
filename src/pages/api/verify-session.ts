import type { APIRoute } from "astro";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const prerender = false;

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

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
    const courseId = session.metadata?.courseId;

    if (!userId || !courseId) {
      return new Response(JSON.stringify({ verified: false, error: "Missing metadata in session" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const courseTitle = session?.line_items?.data?.[0]?.description || courseId;
    const amount = (session.amount_total || 0) / 100;

    // Create enrollment
    const { error: enrollError } = await sbAdmin
      .from("enrollments")
      .upsert(
        { user_id: userId, course_id: courseId, course_title: courseTitle, amount },
        { onConflict: "user_id,course_id", ignoreDuplicates: true }
      );

    if (enrollError) {
      console.error("enrollment upsert error:", enrollError);
      return new Response(JSON.stringify({ verified: false, error: enrollError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create payment record
    await sbAdmin.from("payments").upsert(
      {
        user_id: userId,
        course_id: courseId,
        stripe_session_id: sessionId,
        stripe_payment_intent_id: session.payment_intent,
        amount,
        status: "completed",
        confirmed_at: new Date().toISOString(),
      },
      { onConflict: "stripe_session_id", ignoreDuplicates: true }
    );

    return new Response(JSON.stringify({ verified: true, courseId, courseTitle }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("verify-session error:", err);
    return new Response(JSON.stringify({ verified: false, error: err instanceof Error ? err.message : "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
