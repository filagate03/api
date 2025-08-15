// Button to toggle between dark and light themes
import { useTheme } from 'next-themes';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
