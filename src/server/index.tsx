import { router } from 'app/routing';
import { Route, RouterProvider } from 'atomic-router-react';
import express from 'express';
import * as helmet from 'helmet';
import { HomePage } from 'pages/home';
import { NotFoundPage } from 'pages/not-found';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { main } from './ui/main';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST || '');

export const renderApp = () => {
  const markup = renderToString(
    <RouterProvider router={router}>
      <Route route={HomePage.route} view={HomePage.Page} />
      <Route route={NotFoundPage.route} view={NotFoundPage.Page} />
    </RouterProvider>
  );
  return main.template(markup, assets);
};

const server = express();
server.use(helmet.hidePoweredBy());

server
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR || ''))
  .get('/*', async (req, res) => {
    await router.push({
      path: req.url,
      params: req.params,
      query: req.query,
      method: 'replace',
    });

    const html = renderApp();

    res.status(200).send(html);
  });

export default server;
