// Simple footer with links
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer style={{ padding: '2rem', textAlign: 'center' }}>
      <Link href="/terms">{t('terms')}</Link> | <Link href="/privacy">{t('privacy')}</Link>
    </footer>
  );
}
