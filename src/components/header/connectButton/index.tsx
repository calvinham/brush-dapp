import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWallet } from '../../../action/appActions';
import { selectWallet } from '../../../state/reducers/selectors';
import {
  connectWallet,
  eagerConnect,
  getCurrentWalletAddress,
  getProvider,
} from '../../../service/walletService';
import styles from './index.module.scss';
import { join } from 'path/posix';

export const ConnectWalletButton = () => {
  const dispatch = useDispatch();
  const wallet = useSelector(selectWallet);

  const handleButtonClick = async () => {
    if (wallet) return;
    const account = await connectWallet();
    dispatch(setWallet(account));
  };

  const initiateEagerConnect = async () => {
    const account = await eagerConnect();
    dispatch(setWallet(account));
  };

  const handleWalletChangeEvent = async () => {
    console.log('walletChangeEvent');
    const accounts = await getCurrentWalletAddress();
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
      const accounts = await getCurrentWalletAddress();
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

  useEffect(() => {
    initiateEagerConnect();
    listenForWalletChangeEvents();
    queryForWalletChangeEvents();
  }, []);

  return (
    <div className={styles.button} onClick={handleButtonClick}>
      {wallet === ''
        ? 'connectWallet'
        : `${wallet.substring(0, 6)}...${wallet.substring(wallet.length - 4)}`}
    </div>
  );
};
