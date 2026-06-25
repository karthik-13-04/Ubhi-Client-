import RoutePage from '../../src/components/RoutePage';
import AdminProfileStudio from '../../src/components/AdminProfileStudio';

export default function AdminPage() {
  return (
    <>
      <RoutePage fragmentName="page-admin" />
      <AdminProfileStudio />
    </>
  );
}
