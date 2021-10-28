import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setChain, setWallet } from '../../action/appActions';

interface AppState {
  walletId: string;
  chain: string;
}

const initialState: AppState = {
  walletId: '',
  chain: '',
};

export const AppReducer = createReducer(initialState, (app) => {
  app
    .addCase(setWallet, (state: AppState, { payload }) => ({
      ...state,
      walletId: payload,
    }))
    .addCase(setChain, (state: AppState, { payload }) => ({
      ...state,
      chain: payload,
    }));
});
