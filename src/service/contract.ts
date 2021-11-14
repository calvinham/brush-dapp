import { ethers } from 'ethers';

// change this later
const mintUserBrush = async (): Promise<string> => {
  const { ethereum } = window as any;
  const provider = new ethers.providers.Web3Provider(ethereum);

  const signer = await provider.getSigner();
  return await signer
    .signMessage('signing a message as a test')
    .then((signature) => {
      return signature;
    })
    .catch((error) => {
      console.log(error);
      return '';
    });
};

const claimAvailableEth = async (): Promise<boolean> => {
  const { ethereum } = window as any;
  const provider = new ethers.providers.Web3Provider(ethereum);

  const signer = await provider.getSigner();
  return await signer
    .signMessage('signing a message as a test')
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const ContractService = {
  mintUserBrush,
  claimAvailableEth,
};
