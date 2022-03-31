import { RouterProvider, Route } from 'atomic-router-react';
import React from 'react';
import './App.css';
import { HomePage } from './Home';
import { router } from './app/routing';
import { NotFoundPage } from './pages/not-found';

const App = () => (
  <RouterProvider router={router}>
    <Route route={HomePage.route} view={HomePage.Page} />
    <Route route={NotFoundPage.route} view={NotFoundPage.Page} />
  </RouterProvider>
);

export default App;
