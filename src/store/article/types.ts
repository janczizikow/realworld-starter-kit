// State
export interface ArticleState {
  isFetching: boolean;
  comments: Comment[];
  commentsLastLoaded: null | number;
  errors: null | Errors;
}

// Action types
export enum ArticleActionTypes {
  FETCH_COMMENTS = "article/FETCH_COMMENTS",
  SET_COMMENTS = "article/SET_COMMENTS",
  ADD_COMMENT = "article/ADD_COMMENT",
  REMOVE_COMMENT = "article/REMOVE_COMMENT",
  RESET_COMMENTS = "article/RESET_COMMENTS",
  ADD_TO_FAVORITES = "article/ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES = "article/REMOVE_FROM_FAVORITES"
  // ADD_TAG = "article/ADD_TAG",
  // REMOVE_TAG = "article/REMOVE_TAG"
}

export type ArticleActionType =
  | ArticleActionTypes.FETCH_COMMENTS
  | ArticleActionTypes.SET_COMMENTS
  | ArticleActionTypes.RESET_COMMENTS;

// Payloads

export interface Comment {
  id: number;
  body: string;
  author: {};
  createdAt: Date;
  updatedAt: Date;
}

// Action Creators

export interface FetchCommentsAction {
  type: ArticleActionTypes.FETCH_COMMENTS;
  slug: string;
}

export interface SetCommentsAction {
  type: ArticleActionTypes.SET_COMMENTS;
  comments: Comment[];
}

export interface ResetCommentsAction {
  type: ArticleActionTypes.RESET_COMMENTS;
}

export type ArticleActions =
  | FetchCommentsAction
  | SetCommentsAction
  | ResetCommentsAction;
