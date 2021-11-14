import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import discordLogo from '../../assets/discord_logo.svg';
import openSeaLogo from '../../assets/opensea_logo.svg';
import twitterLogo from '../../assets/twitter_logo_black.svg';
import cx from 'classnames';

import { useSelector } from 'react-redux';
import { selectWallet } from '../../state/reducers/app/selectors';

export const Header = () => {
  const wallet = useSelector(selectWallet);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (headerRef.current) {
      offset > headerRef.current.getBoundingClientRect().height
        ? setScrolled(true)
        : setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shortenedWalletAddress = `${wallet.substring(0, 6)}...
  ${wallet.substring(wallet.length - 4)}`;

  return (
    <div
      ref={headerRef}
      className={cx(styles.header, {
        [styles.scrolled]: scrolled,
      })}
    >
      <div className={styles.logoRow}>
        <img src={discordLogo} className={styles.icon} />
        <img src={openSeaLogo} className={styles.icon} />
        <img src={twitterLogo} className={styles.icon} />
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.headerLink}>about</div>

        {wallet !== '' ? (
          <div className={styles.button}>{shortenedWalletAddress}</div>
        ) : (
          <div className={styles.rectangle} />
        )}
      </div>
    </div>
  );
};
