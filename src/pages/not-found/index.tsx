import { createRoute } from 'atomic-router';
import React from 'react';

const route = createRoute();

const Page: React.FC = () => <div>404. Not found</div>;

export const NotFoundPage = {
  Page,
  route,
};
