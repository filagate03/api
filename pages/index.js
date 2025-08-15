// Landing page combining discovery and tools
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useTranslation();
  const [topic, setTopic] = useState('');
  const [data, setData] = useState(null);

  async function onSearch(e) {
    e.preventDefault();
    const token = window.turnstile?.getResponse();
    const res = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-captcha-token': token || ''
      },
      body: JSON.stringify({ topic, platforms: ['youtube'] })
    });
    const j = await res.json();
    setData(j);
  }

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Header />
      <main>
        <h1>{t('welcome')}</h1>
        <form onSubmit={onSearch}>
          <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="topic" />
          <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}></div>
          <button type="submit">{t('discover')}</button>
        </form>
        <pre>{data && JSON.stringify(data, null, 2)}</pre>
      </main>
      <Footer />
    </>
  );
}
