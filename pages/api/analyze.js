// Deeply analyzes a single video
import { getCaptions } from '../../lib/captions';
import { verifyHuman } from '../../lib/antiabuse';

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') return res.status(405).end();
  const token = req.headers['x-captcha-token'] || req.body?.captchaToken;
  const vr = await verifyHuman(token);
  if (!vr.ok) return res.status(403).json({ error: 'captcha_failed', reason: vr.reason });
  const { id, platform } = req.body || req.query;
  if (!id) return res.status(400).json({ error: 'missing id' });
  const transcript = await getCaptions(platform, id);
  res.status(200).json({ transcript, hooks_detected: [], cta: [], phrases: [], rhythm: {}, reasons: [] });
}
