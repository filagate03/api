// CRUD for user alerts
import { supabase } from '../../lib/supabase';
import { rateLimit } from '../../lib/antiabuse';

export default async function handler(req, res) {
  const limit = await rateLimit(req);
  if (!limit.ok) return res.status(429).json({ error: 'Rate limit exceeded' });
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return res.status(401).json({ error: 'unauthenticated' });

  if (req.method === 'GET') {
    const { data } = await supabase.from('alerts').select('*').eq('user_id', user.id);
    return res.status(200).json(data);
  }
  if (req.method === 'POST') {
    const { data, error } = await supabase.from('alerts').insert({ user_id: user.id, ...req.body }).select();
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json(data[0]);
  }
  if (req.method === 'DELETE') {
    const { error } = await supabase.from('alerts').delete().eq('id', req.body.id).eq('user_id', user.id);
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ ok: true });
  }
  res.status(405).end();
}
