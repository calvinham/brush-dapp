import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setWallet = createAction<string>('app/setWallet');
export const setChain = createAction<string>('app/setChain');
