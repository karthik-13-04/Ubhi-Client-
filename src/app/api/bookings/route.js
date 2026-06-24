import { createCrudRoute } from '../../../lib/crudFactory';
export const { GET, POST } = createCrudRoute('bookings', false);