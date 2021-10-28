import { ethers } from 'ethers';

export const getProvider = async (): Promise<ethers.providers.Web3Provider> => {
  const { ethereum } = window as any;
  return new ethers.providers.Web3Provider(ethereum);
};

export const connectWallet = async (): Promise<string> => {
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

export const eagerConnect = async (): Promise<string> =>
  getProvider()
    .then(async (provider) => {
      const accounts = await provider.listAccounts();
      return accounts[0] !== undefined ? accounts[0] : '';
    })
    .catch((error) => {
      console.log('error: ', error);
      return '';
    });

export const getCurrentWalletAddress = async (): Promise<
  string[] | undefined
> => {
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
  }
};
