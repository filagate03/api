// Global app wrapper: sets up theme and i18n providers
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
