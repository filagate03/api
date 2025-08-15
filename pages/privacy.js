// Privacy policy page (bilingual)
import { useTranslation } from 'next-i18next';

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t('privacy')}</h1>
      <p>TODO: add privacy policy text.</p>
    </main>
  );
}
