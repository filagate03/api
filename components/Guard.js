// Component that protects pages by requiring auth and role
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Guard({ children, roles }) {
  const [ok, setOk] = useState(false);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const role = data.user?.user_metadata?.role;
      if (!data.user) router.push('/login');
      else if (roles && !roles.includes(role)) router.push('/');
      else setOk(true);
    });
  }, [roles]);

  if (!ok) return null;
  return children;
}
