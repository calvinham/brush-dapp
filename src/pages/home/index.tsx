import React from 'react';
import { Header } from '../../components/header';
import styles from './index.module.scss';

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};
