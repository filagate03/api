// Login page handling Supabase auth
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { supabase } from '../lib/supabase';

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    setMessage(error ? error.message : 'Check your email');
  };

  return (
    <main>
      <h1>{t('login')}</h1>
      <form onSubmit={handleLogin}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <button type="submit">{t('login')}</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
