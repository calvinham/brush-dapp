import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { AppReducer } from './reducers/app';
import { CanvasReducer } from './reducers/canvas';

export const store = configureStore({
  reducer: {
    app: AppReducer,
    canvas: CanvasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
