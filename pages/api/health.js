// Health check endpoint to verify environment
export default function handler(req, res) {
  const ok = !!(process.env.OPENAI_API_KEY && process.env.NEXT_PUBLIC_SUPABASE_URL);
  res.status(ok ? 200 : 500).json({ ok });
}
