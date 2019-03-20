import { AuthState, AuthActions } from "./auth/types";

export interface RootState {
  auth: AuthState;
}

export type RootActions = AuthActions;
