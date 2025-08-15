// YooKassa billing adapter using REST API
export async function yookassaCheckout(plan, locale) {
  if (!process.env.YOOKASSA_SECRET_KEY) throw new Error('Missing YooKassa key');
  // Placeholder: return dummy URL
  return 'https://yookassa.ru/checkout';
}

export async function yookassaWebhook(req) {
  // TODO: validate signature and update billing
}
