// Payloads
export interface Author {
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  author: Author;
}

// State
export interface HomeState {
  isFetching: boolean;
  page: number;
  articles: Article[];
  // errors: null | Errors;
}

// Action Types
export enum HomeActionTypes {
  FETCH_ARTICLES = "home/FETCH_ARTICLES",
  SET_ARTICLES = "home/SET_ARTICLES",
  APPEND_ARTICLES = "home/APPEND_ARTICLES",
  FETCH_ARTICLES_FAILED = "home/FETCH_ARTICLES_FAILED"
}

export type HomeActionType =
  | HomeActionTypes.FETCH_ARTICLES
  | HomeActionTypes.SET_ARTICLES
  | HomeActionTypes.APPEND_ARTICLES
  | HomeActionTypes.FETCH_ARTICLES_FAILED;

// Action creators

export interface FetchArticlesAction {
  type: HomeActionTypes.FETCH_ARTICLES;
}

export interface SetArticlesAction {
  type: HomeActionTypes.SET_ARTICLES;
  articles: Article[];
}

export interface AppendArticlesAction {
  type: HomeActionTypes.APPEND_ARTICLES;
  articles: Article[];
}

export interface FetchArticlesFailedAction {
  type: HomeActionTypes.FETCH_ARTICLES_FAILED;
}

export type HomeActions =
  | FetchArticlesAction
  | SetArticlesAction
  | AppendArticlesAction
  | FetchArticlesFailedAction;
