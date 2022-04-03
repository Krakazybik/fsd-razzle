import { createRoute } from 'atomic-router';
import React from 'react';

const route = createRoute();

const Page: React.FC = () => <div>HOME</div>;

export const HomePage = {
  Page,
  route,
};
