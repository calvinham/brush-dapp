import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWallet } from '../../action/appActions';
import { AppService } from '../../service/app';
import {
  selectWallet,
  selectChainId,
  selectBrushId,
} from '../../state/reducers/selectors';
import { LandingConnectWallet } from './connect-wallet';
import styles from './index.module.scss';
import { LandingBrushModal } from './mint-brush';

interface Props {
  shouldScroll: boolean;
  setShouldScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Landing = (props: Props) => {
  const dispatch = useDispatch();
  const wallet = useSelector(selectWallet);
  const chainId = useSelector(selectChainId);
  const brush = useSelector(selectBrushId);

  const handleConnectWalletClick = async () => {
    if (wallet) return;
    const account = await AppService.connectWallet();
    dispatch(setWallet(account));
  };

  const initiateEagerConnect = async () => {
    const accounts = await AppService.getCurrentWalletAddress();
    if (accounts) {
      if (accounts.length !== 0) {
        dispatch(setWallet(accounts[0]));
      }
    }
  };

  const handleWalletChangeEvent = async () => {
    const accounts = await AppService.getCurrentWalletAddress();
    if (accounts) {
      dispatch(setWallet(accounts[0]));
    }
  };

  const listenForWalletChangeEvents = async () => {
    const { ethereum } = window as any;
    if (ethereum) {
      ethereum.on('accountsChanged', handleWalletChangeEvent);
    } else {
      dispatch(setWallet(''));
    }
  };

  const queryForWalletChangeEvents = () => {
    setTimeout(async () => {
      if (wallet === '') return;

      const { ethereum } = window as any;
      if (!ethereum) {
        dispatch(setWallet(''));
      }
      const accounts = await AppService.getCurrentWalletAddress();
      if (accounts) {
        if (accounts.length === 0) {
          dispatch(setWallet(''));
        }

        if (accounts[0].toLowerCase() !== wallet.toLowerCase()) {
          dispatch(setWallet(accounts[0]));
        }
      }
    }, 1000);
  };

  const handleActivateScroll = () => {
    if (!props.shouldScroll) {
      props.setShouldScroll(true);
    }
  };

  useEffect(() => {
    initiateEagerConnect();
    listenForWalletChangeEvents();
    queryForWalletChangeEvents();
  }, []);

  useEffect(() => {
    // change UI here
  }, [chainId]);

  useEffect(() => {
    // brush id here
  }, [brush]);

  return (
    <div className={styles.landingContainer}>
      <div className={styles.mainContainer}>
        {wallet === '' ? (
          <LandingConnectWallet onButtonClick={handleConnectWalletClick} />
        ) : (
          <LandingBrushModal />
        )}
      </div>

      <div className={styles.arrowContainer} onClick={handleActivateScroll}>
        <div className={styles.arrow} />
        <div className={styles.scrollText}>scroll</div>
      </div>
    </div>
  );
};
