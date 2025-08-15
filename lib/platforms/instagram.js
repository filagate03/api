// Adapter for Instagram Reels via Apify
export async function searchInstagram(query) {
  if (!process.env.APIFY_TOKEN) throw new Error('Missing APIFY_TOKEN');
  // TODO: call Apify actor
  return [];
}
