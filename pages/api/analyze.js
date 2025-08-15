// Deeply analyzes a single video
import { getCaptions } from '../../lib/captions';

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') return res.status(405).end();
  const { id, platform } = req.body || req.query;
  if (!id) return res.status(400).json({ error: 'missing id' });
  const transcript = await getCaptions(platform, id);
  res.status(200).json({ transcript, hooks_detected: [], cta: [], phrases: [], rhythm: {}, reasons: [] });
}
