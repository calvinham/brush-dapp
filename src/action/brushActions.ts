import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ContractService } from '../service/contract';

export const setBrushNumber = createAction<number>('brush/setBrushNumber');

export const setBrushContributions = createAction<number>(
  'brush/setBrushContributions',
);

export const setUnclaimedEth = createAction<number>('brush/setUnclaimedEth');

export const setTotalEthClaimed = createAction<number>(
  'brush/setTotalEthClaimed',
);

export const claimClaimableEth = createAsyncThunk(
  'brush/claimClaimableEth',
  ContractService.claimAvailableEth,
);
