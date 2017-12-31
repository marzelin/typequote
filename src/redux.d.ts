export * from "../node_modules/redux";

import Action from "@state/actions";
import { IStoreState } from "@state/store";

export type Dispatchable = (...as: any[]) => Action | ThunkAction;

type ThunkAction =
  | ((dispach: Idispatch, getState: () => IStoreState) => void)
  | ((dispach: Idispatch) => void);

export type TgetState = () => IStoreState;

export interface Idispatch {
  (action: Action): void;
  (thunk: ThunkAction): void;
}

type combineReducers = <StoreState, Action>(
  reducers: {
    [K in keyof StoreState]: (
      state: StoreState[K],
      action: Action
    ) => StoreState[K]
  }
) => (state: StoreState, action: Action) => StoreState;

export const combineReducers: combineReducers;
