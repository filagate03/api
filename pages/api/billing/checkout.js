// Unified checkout endpoint for different billing providers
import { createCheckout } from '../../../lib/billing';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { plan, locale } = req.body || {};
  try {
    const url = await createCheckout(plan, locale);
    res.status(200).json({ checkout_url: url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
