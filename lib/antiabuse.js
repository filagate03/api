// Simple in-memory rate limiter and placeholders for anti-abuse
const hits = new Map();
const WINDOW = 60 * 1000; // 1 minute

export async function rateLimit(req) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();
  const bucket = hits.get(ip) || [];
  const recent = bucket.filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return { ok: recent.length < 10 };
}

export function hashDevice(fp) {
  // placeholder hashing
  return fp;
}

export async function verifyHuman(token) {
  if (process.env.NODE_ENV !== 'production') return { ok: true, reason: 'dev' };
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return { ok: false, reason: 'missing' };
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`
  });
  const j = await r.json();
  return { ok: !!j.success, reason: (j['error-codes'] || []).join(',') };
}
