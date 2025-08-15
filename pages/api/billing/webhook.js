// Unified webhook handler updating billing state
import { handleWebhook } from '../../../lib/billing';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    await handleWebhook(req);
    res.status(200).json({ received: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}
