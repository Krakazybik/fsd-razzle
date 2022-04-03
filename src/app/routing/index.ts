import { createHistoryRouter } from 'atomic-router';
import { sample } from 'effector';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { HomePage } from 'pages/home';
import { NotFoundPage } from 'pages/not-found';

const isSsr = process.env.BUILD_TARGET === 'server';

const routes = [
  { path: '/', route: HomePage.route },
  { path: '/404', route: NotFoundPage.route },
];

export const router = createHistoryRouter({
  routes,
  hydrate: Boolean(isSsr),
});

const history = isSsr ? createMemoryHistory() : createBrowserHistory();
router.setHistory(history);

sample({
  clock: router.routeNotFound,
  fn: () => ({}),
  target: NotFoundPage.route.open,
});
