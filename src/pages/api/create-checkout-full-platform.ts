import type { APIRoute } from "astro";
import Stripe from "stripe";

export const prerender = false;

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return new Response(JSON.stringify({ error: "Missing userId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const origin = new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Full Platform Access — All Courses" },
            unit_amount: 24999,
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
        isFullPlatform: "true",
        courses: "iam-pam-professional,full-stack-development,python-programming,cloud-engineering,cybersecurity,data-science-ml,devops-cicd,mobile-app-development",
      },
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}&type=full-platform`,
      cancel_url: `${origin}/payment/cancel`,
    });

    return new Response(JSON.stringify({ sessionId: session.id, url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("create-full-platform-checkout error:", err);
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
