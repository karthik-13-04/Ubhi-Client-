import { createCrudRoute } from '../../../lib/crudFactory';
export const { GET, POST } = createCrudRoute('journal_posts', true);