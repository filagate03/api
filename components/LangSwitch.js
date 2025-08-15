// Language switcher component
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next';

export default function LangSwitch() {
  const router = useRouter();
  const change = (lng) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };
  return (
    <span>
      <button onClick={() => change('ru')}>RU</button>
      <button onClick={() => change('en')}>EN</button>
    </span>
  );
}
