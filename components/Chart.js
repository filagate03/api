// Placeholder chart component using canvas
import { useEffect, useRef } from 'react';

export default function Chart({ data = [] }) {
  const ref = useRef();
  useEffect(() => {
    const ctx = ref.current.getContext('2d');
    ctx.clearRect(0, 0, 300, 150);
    ctx.fillStyle = 'var(--accent)';
    data.forEach((v, i) => ctx.fillRect(i * 10, 150 - v, 8, v));
  }, [data]);
  return <canvas ref={ref} width={300} height={150} />;
}
