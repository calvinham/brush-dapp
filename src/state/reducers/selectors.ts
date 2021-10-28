import { createSelector } from 'reselect';
import { RootState } from '..';

export const selectWallet = (state: RootState) => state.app.walletId;
export const selectChain = (state: RootState) => state.app.chain;
