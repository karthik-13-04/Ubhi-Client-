import { createCrudIdRoute } from '../../../../lib/crudFactory';
export const { GET, PUT, DELETE } = createCrudIdRoute('products');