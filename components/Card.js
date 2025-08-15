// Simple panel card component
export default function Card({ children }) {
  return <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: 8 }}>{children}</div>;
}
