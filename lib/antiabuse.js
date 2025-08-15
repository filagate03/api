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
