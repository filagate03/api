// Adapter for YouTube Data API
export async function searchYouTube(query) {
  if (!process.env.YT_API_KEY) throw new Error('Missing YT_API_KEY');
  // TODO: implement real search
  return [];
}
