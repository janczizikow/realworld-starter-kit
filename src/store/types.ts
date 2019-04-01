import { AuthState, AuthActions } from "./auth/types";
import { HomeState, HomeActions } from "./home/types";
import { ArticleState, ArticleActions } from "./article/types";

export interface RootState {
  auth: AuthState;
  home: HomeState;
  article: ArticleState;
}

export type RootActions = AuthActions | HomeActions | ArticleActions;
