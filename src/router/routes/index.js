import { catalog } from './catalog.route';
import { store } from './store.route';

import { page404 } from './page404.route';

const routes = [
    ...catalog,
    ...store,
    ...page404
];

export { routes };