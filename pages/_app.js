// Global app wrapper: sets up theme and i18n providers
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
