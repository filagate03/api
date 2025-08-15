// Chooses billing provider adapter based on env
import { lemonCheckout, lemonWebhook } from './lemon';
import { stripeCheckout, stripeWebhook } from './stripe';
import { yookassaCheckout, yookassaWebhook } from './yookassa';

export async function createCheckout(plan, locale) {
  const provider = process.env.BILLING_PROVIDER;
  if (provider === 'stripe') return stripeCheckout(plan, locale);
  if (provider === 'yookassa') return yookassaCheckout(plan, locale);
  return lemonCheckout(plan, locale);
}

export async function handleWebhook(req) {
  const provider = process.env.BILLING_PROVIDER;
  if (provider === 'stripe') return stripeWebhook(req);
  if (provider === 'yookassa') return yookassaWebhook(req);
  return lemonWebhook(req);
}
