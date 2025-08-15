// Landing page combining discovery and tools
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Header />
      <main>
        <h1>{t('welcome')}</h1>
        {/* TODO: Implement search, keywords, creators and hooks lab */}
      </main>
      <Footer />
    </>
  );
}
