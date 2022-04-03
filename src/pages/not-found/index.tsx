import { createRoute } from 'atomic-router';
import React from 'react';
import styles from './styles.module.scss';

const route = createRoute();

const Page: React.FC = () => (
  <div className={styles.Not}>
    <p>404. Not Found</p>
  </div>
);

export const NotFoundPage = {
  Page,
  route,
};
