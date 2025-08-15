// Utilities to fetch captions for YouTube videos
export async function getCaptions(platform, id) {
  if (platform !== 'youtube') return [];
  // Placeholder: without API key return empty transcript
  if (!process.env.YT_API_KEY) return [];
  // TODO: implement real caption fetch
  return [];
}
