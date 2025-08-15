// Lemon Squeezy billing adapter using REST API
export async function lemonCheckout(plan, locale) {
  if (!process.env.LEMON_SQUEEZY_API_KEY) throw new Error('Missing Lemon API key');
  // Placeholder: return dummy URL
  return 'https://lemon.checkout/placeholder';
}

export async function lemonWebhook(req) {
  // TODO: validate signature and update billing
}
