// Header with navigation, theme and language switchers
import Link from 'next/link';
import ToggleTheme from './ToggleTheme';
import LangSwitch from './LangSwitch';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <Link href="/">{t('discover')}</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/settings">{t('settings')}</Link>
      <ToggleTheme />
      <LangSwitch />
    </header>
  );
}
