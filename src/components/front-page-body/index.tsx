import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './index.module.scss';

export const FrontPageBody = () => {
  const history = useHistory();

  const handleButtonTap = () => history.push('/canvas');

  return (
    <div className={styles.container}>
      <div className={styles.bodyContainer}>
        <div className={styles.enterAppButton} onClick={handleButtonTap}>
          enter canvas
        </div>
      </div>
    </div>
  );
};
