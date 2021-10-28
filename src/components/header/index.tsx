import React from 'react';
import styles from './index.module.scss';
import discordLogo from '../../assets/discord_logo.svg';
import openSeaLogo from '../../assets/opensea_logo.svg';
import twitterLogo from '../../assets/twitter_logo_black.svg';
import { ConnectWalletButton } from './connectButton';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoRow}>
        <div className={styles.title}>Genesis Brush</div>
      </div>

      <div className={styles.centerContainer}>
        <img src={discordLogo} className={styles.icon} />
        <img src={openSeaLogo} className={styles.icon} />
        <img src={twitterLogo} className={styles.icon} />

        <ConnectWalletButton />
      </div>
    </div>
  );
};
