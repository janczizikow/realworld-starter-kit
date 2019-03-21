import { AuthState, AuthActions } from "./auth/types";
import { ArticlesState, ArticlesActions } from "./articles/types";

export interface RootState {
  auth: AuthState;
  articles: ArticlesState;
}

export type RootActions = AuthActions | ArticlesActions;
