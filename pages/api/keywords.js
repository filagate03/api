// Extract keywords and clusters from videos
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { videos = [] } = req.body || {};
  // Placeholder: return empty arrays
  return res.status(200).json({ keywords: [], clusters: [] });
}
