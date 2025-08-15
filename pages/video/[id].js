// Page for deep analysis of a single video
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Video() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  async function analyze(e) {
    e.preventDefault();
    const token = window.turnstile?.getResponse();
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-captcha-token': token || ''
      },
      body: JSON.stringify({ id, platform: 'youtube' })
    });
    const j = await res.json();
    setData(j);
  }

  return (
    <main>
      <h1>Video {id}</h1>
      <form onSubmit={analyze}>
        <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}></div>
        <button type="submit">Analyze</button>
      </form>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
