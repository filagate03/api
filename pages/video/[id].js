// Page for deep analysis of a single video
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Video() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/analyze?id=${id}`)
      .then((r) => r.json())
      .then(setData);
  }, [id]);

  return (
    <main>
      <h1>Video {id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
