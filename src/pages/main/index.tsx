import React from 'react';
import { FrontPageBody } from '../../components/front-page-body';
import { Header } from '../../components/header';
import styles from './index.module.scss';
import pixelBackground from '../../assets/pixel_bg.png';
import { useHistory } from 'react-router-dom';
import { selectWallet } from '../../state/reducers/selectors';
import { useSelector } from 'react-redux';

export const HomeBody = () => {
  const x = '';

  return <div className={styles.bodyArea} />;
};

export const Main = () => {
  const wallet = useSelector(selectWallet);
  const history = useHistory();
  const handleButtonTap = () => {
    if (wallet !== undefined && wallet !== '') {
      console.log('authenticated! Entering canvas');
      history.push('/canvas');
    } else {
      console.log('please connect your wallet first!');
    }
  };

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
