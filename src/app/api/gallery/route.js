import { createCrudRoute } from '../../../lib/crudFactory';
export const { GET, POST } = createCrudRoute('gallery_items', true);