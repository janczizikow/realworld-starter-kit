import {
  ArticleActionTypes,
  FetchCommentsAction,
  SetCommentsAction,
  Comment,
  ResetCommentsAction
} from "./types";

export const fetchComments = (slug: string): FetchCommentsAction => ({
  type: ArticleActionTypes.FETCH_COMMENTS,
  slug
});

export const setComments = (comments: Comment[]): SetCommentsAction => ({
  type: ArticleActionTypes.SET_COMMENTS,
  comments
});

export const resetComments = (): ResetCommentsAction => ({
  type: ArticleActionTypes.RESET_COMMENTS
});
