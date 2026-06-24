import { createCrudRoute } from '../../../lib/crudFactory';
export const { GET, POST } = createCrudRoute('orders', false);