// Virality scoring utility based on provided metrics
export function defineScore(video) {
  const velocity = Math.min(40, Math.log(video.views_per_day + 1) * 10);
  const engagement = Math.min(20, (video.likes_per_k || 0) * 10 + (video.comments_per_k || 0) * 20 + (video.shares_per_k || 0) * 10);
  const freshness = Math.max(0, 20 - (video.age_days || 0));
  const author_penalty = -(video.author_size || 0);
  const sum = velocity + engagement + freshness + author_penalty;
  const virality = Math.max(0, Math.min(100, sum));
  return {
    score: virality,
    breakdown: { velocity, engagement, freshness, author_penalty },
  };
}
