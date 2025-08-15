// Small badge component
export default function Badge({ children }) {
  return <span style={{ background: 'var(--accent)', color: '#fff', padding: '0 4px', borderRadius: 4 }}>{children}</span>;
}
