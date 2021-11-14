import { createSelector } from 'reselect';
import { RootState } from '..';

export const selectWallet = (state: RootState) => state.app.walletId;

export const selectChainId = (state: RootState) => state.app.chainId;

export const selectBrushId = (state: RootState) => state.app.brushId;
