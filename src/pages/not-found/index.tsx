import { createRoute } from 'atomic-router';
import React from 'react';
import styles from './styles.module.scss';

const route = createRoute();

const Page: React.FC = () => <div className={styles.Not}>404. Not found</div>;

export const NotFoundPage = {
  Page,
  route,
};
