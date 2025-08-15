// Generates content ideas using OpenAI
import OpenAI from 'openai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'Missing OPENAI_API_KEY' });
  }
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  // Placeholder prompt
  const { topic = '' } = req.body || {};
  const hooks = Array(10).fill(`Hook for ${topic}`);
  const formats = Array(5).fill('Format');
  const scripts = [{ title: 'Sample', timeline: [], cta: '' }];
  const broll = Array(20).fill('b-roll');
  res.status(200).json({ hooks, formats, scripts, broll });
}
