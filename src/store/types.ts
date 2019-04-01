import { AuthState, AuthActions } from "./auth/types";
import { HomeState, HomeActions } from "./home/types";

export interface RootState {
  auth: AuthState;
  home: HomeState;
}

export type RootActions = AuthActions | HomeActions;
