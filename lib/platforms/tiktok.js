// Adapter for TikTok via Apify
export async function searchTikTok(query) {
  if (!process.env.APIFY_TOKEN) throw new Error('Missing APIFY_TOKEN');
  // TODO: call Apify actor
  return [];
}
