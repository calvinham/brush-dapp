import React from 'react';
import { FrontPageBody } from '../../components/front-page-body';
import { Header } from '../../components/header';
import styles from './index.module.scss';
import pixelBackground from '../../assets/pixel_bg.png';
import { useHistory } from 'react-router-dom';

export const HomeBody = () => {
  const x = '';

  return <div className={styles.bodyArea} />;
};

export const Main = () => {
  const history = useHistory();
  const handleButtonTap = () => history.push('/canvas');

  return (
    <div className={styles.container}>
      <div className={styles.bgImage}>
        <div className={styles.gradient} />
        <img src={pixelBackground} className={styles.pixelBackground} />

        <div className={styles.buttonContainer}>
          <div className={styles.enterAppButton} onClick={handleButtonTap}>
            enter canvas
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};
