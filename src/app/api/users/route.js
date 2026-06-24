import { createCrudRoute } from '../../../lib/crudFactory';
export const { GET, POST } = createCrudRoute('admin_users', false);