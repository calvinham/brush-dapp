import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { AppReducer } from './reducers/appReducer';

export const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
