import { createReducer } from '@reduxjs/toolkit';
import {
  fetchBrushId,
  fetchChainId,
  setBrush,
  setChain,
  setWallet,
} from '../../../action/appActions';

interface AppState {
  loading: number;
  walletId: string;
  chainId: number;
  brushId: string;
}

const initialState: AppState = {
  loading: 0,
  walletId: '',
  chainId: 0,
  brushId: '',
};

export const AppReducer = createReducer(initialState, (app) => {
  app
    .addCase(setWallet, (state: AppState, { payload }) => ({
      ...state,
      walletId: payload,
    }))
    .addCase(setChain, (state: AppState, { payload }) => ({
      ...state,
      chainId: payload,
    }))
    .addCase(setBrush, (state: AppState, { payload }) => ({
      ...state,
      brushId: payload,
    }))
    .addCase(fetchBrushId.pending, (state: AppState) => ({
      ...state,
      loading: state.loading + 1,
    }))
    .addCase(fetchBrushId.rejected, (state: AppState) => ({
      ...state,
      loading: state.loading - 1,
    }))
    .addCase(fetchBrushId.fulfilled, (state: AppState, { payload }) => ({
      ...state,
      loading: state.loading - 1,
      brushId: payload,
    }))
    .addCase(fetchChainId.pending, (state: AppState) => ({
      ...state,
      loading: state.loading + 1,
    }))
    .addCase(fetchChainId.rejected, (state: AppState) => ({
      ...state,
      loading: state.loading - 1,
    }))
    .addCase(fetchChainId.fulfilled, (state: AppState, { payload }) => ({
      ...state,
      loading: state.loading - 1,
      chainId: payload,
    }));
});
