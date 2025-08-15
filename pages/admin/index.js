// Admin panel placeholder. Access restricted to admin/support roles.
import Guard from '../../components/Guard';

export default function Admin() {
  return (
    <Guard roles={['admin', 'support']}>
      <main>
        <h1>Admin</h1>
        {/* TODO: implement admin modules */}
      </main>
    </Guard>
  );
}
