// Stripe billing adapter
import Stripe from 'stripe';

export async function stripeCheckout(plan, locale) {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error('Missing Stripe key');
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  // Placeholder session
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: process.env[`STRIPE_PRICE_ID_${plan.toUpperCase()}`], quantity: 1 }],
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });
  return session.url;
}

export async function stripeWebhook(req) {
  // TODO: verify signature and update billing
}
