import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import slice from "./slice";

export const store = configureStore({ reducer: { trend: slice } });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
