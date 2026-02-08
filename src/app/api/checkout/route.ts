import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

function getPriceId(locale?: string): string {
  if (locale === "pt-BR") {
    return process.env.STRIPE_DROPVOX_PRICE_ID_BRL || process.env.STRIPE_DROPVOX_PRICE_ID!;
  }
  return process.env.STRIPE_DROPVOX_PRICE_ID_USD || process.env.STRIPE_DROPVOX_PRICE_ID!;
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { email, locale } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: getPriceId(locale),
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email || undefined,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "https://dropvox.app"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "https://dropvox.app"}/pricing`,
      metadata: {
        product: "dropvox-pro",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
