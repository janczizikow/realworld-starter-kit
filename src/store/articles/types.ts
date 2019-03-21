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
export interface ArticlesState {
  isFetching: boolean;
  page: number;
  list: Article[];
  // errors: null | Errors;
}

// Action Types
export enum ArticlesActionTypes {
  FETCH_ARTICLES = "articles/FETCH_ARTICLES",
  SET_ARTICLES = "articles/SET_ARTICLES",
  APPEND_ARTICLES = "articles/APPEND_ARTICLES",
  FETCH_ARTICLES_FAILED = "articles/FETCH_ARTICLES_FAILED"
}

export type ArticlesActionType =
  | ArticlesActionTypes.FETCH_ARTICLES
  | ArticlesActionTypes.SET_ARTICLES
  | ArticlesActionTypes.APPEND_ARTICLES
  | ArticlesActionTypes.FETCH_ARTICLES_FAILED;

// Action creators

export interface FetchArticlesAction {
  type: ArticlesActionTypes.FETCH_ARTICLES;
}

export interface SetArticlesAction {
  type: ArticlesActionTypes.SET_ARTICLES;
  articles: Article[];
}

export interface AppendArticlesAction {
  type: ArticlesActionTypes.APPEND_ARTICLES;
  articles: Article[];
}

export interface FetchArticlesFailedAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_FAILED;
}

export type ArticlesActions =
  | FetchArticlesAction
  | SetArticlesAction
  | AppendArticlesAction
  | FetchArticlesFailedAction;
