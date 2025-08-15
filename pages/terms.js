// Terms of service page (bilingual)
import { useTranslation } from 'next-i18next';

export default function Terms() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t('terms')}</h1>
      <p>TODO: add terms in both languages.</p>
    </main>
  );
}
