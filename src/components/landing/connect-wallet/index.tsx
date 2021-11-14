import React from 'react';
import styles from './index.module.scss';

interface Props {
  onButtonClick: () => void;
}

export const LandingConnectWallet = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleText}>Genesis Brush</div>
      <div className={styles.button} onClick={props.onButtonClick}>
        <div className={styles.buttonText}>connect wallet</div>
      </div>
    </div>
  );
};
