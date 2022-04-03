import { RouterProvider, Route } from 'atomic-router-react';
import { HomePage } from 'pages/home';
import { NotFoundPage } from 'pages/not-found';
import React from 'react';
import { router } from './routing';

const App = () => (
  <RouterProvider router={router}>
    <Route route={HomePage.route} view={HomePage.Page} />
    <Route route={NotFoundPage.route} view={NotFoundPage.Page} />
  </RouterProvider>
);

export default App;
