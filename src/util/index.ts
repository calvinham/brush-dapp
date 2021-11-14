import { ethers } from 'ethers';

export const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getBlockNumber = async (): Promise<number> => {
  const { ethereum } = window as any;
  const provider = new ethers.providers.Web3Provider(ethereum);
  return await provider.getBlockNumber();
};
