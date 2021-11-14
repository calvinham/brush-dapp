import { ethers } from 'ethers';
import { getBlockNumber } from '../util';

const getProvider = async (): Promise<ethers.providers.Web3Provider> => {
  const { ethereum } = window as any;
  return new ethers.providers.Web3Provider(ethereum);
};

const connectWallet = async (): Promise<string> => {
  try {
    const { ethereum } = window as any;
    if (!ethereum) return '';
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0] ? (accounts[0] as string) : '';
  } catch (error) {
    console.log(error);
    return '';
  }
};

const getCurrentWalletAddress = async (): Promise<string[] | undefined> => {
  try {
    const { ethereum } = window as any;
    if (ethereum) {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts) {
        return accounts.length !== 0 ? accounts : [''];
      }
    }
  } catch (error) {
    console.log('error: ', error);
    return undefined;
  }
};

// fetch brush ID here
const fetchBrushId = async (wallet: string): Promise<string> => {
  const blockNumber = await getBlockNumber();
  return String(blockNumber);
};

const fetchChainId = async (): Promise<number> => {
  try {
    const provider = await getProvider();
    const network = await provider.getNetwork();
    return network ? network.chainId : 0;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export const AppService = {
  getProvider,
  connectWallet,
  getCurrentWalletAddress,
  fetchChainId,
  fetchBrushId,
};
