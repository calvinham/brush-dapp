import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppService } from '../service/app';
import { ContractService } from '../service/contract';

// ----------------------- app related actions -------------------

export const setWallet = createAction<string>('app/setWallet');

export const setChain = createAction<number>('app/setChain');

export const setBrush = createAction<string>('app/setBrushId');

export const fetchBrushId = createAsyncThunk(
  'app/fetchBrushId',
  AppService.fetchBrushId,
);

export const fetchChainId = createAsyncThunk(
  'app/fetchChainId',
  AppService.fetchChainId,
);
