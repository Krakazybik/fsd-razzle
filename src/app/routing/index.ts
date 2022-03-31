// app/routing
import { createHistoryRouter } from 'atomic-router';
import { sample } from 'effector';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { NotFoundPage } from 'pages/not-found';
import { HomePage } from '../../Home';

const isSsr = process.env.BUILD_TARGET === 'server';

const routes = [
  { path: '/', route: HomePage.route },
  { path: '/404', route: NotFoundPage.route },
];

export const router = createHistoryRouter({
  routes,
});

const history = isSsr ? createMemoryHistory() : createBrowserHistory();
router.setHistory(history);

sample({
  clock: router.routeNotFound,
  fn: () => ({}),
  target: NotFoundPage.route.open,
});
