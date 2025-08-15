// User settings for profile, theme and billing
import ToggleTheme from '../components/ToggleTheme';
import LangSwitch from '../components/LangSwitch';

export default function Settings() {
  return (
    <main>
      <h1>Settings</h1>
      <ToggleTheme />
      <LangSwitch />
      {/* TODO: profile and billing */}
    </main>
  );
}
