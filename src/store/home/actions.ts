import {
  Article,
  HomeActionTypes,
  FetchArticlesAction,
  SetArticlesAction,
  AppendArticlesAction,
  FetchArticlesFailedAction
} from "./types";

export const fetchArticles = (): FetchArticlesAction => ({
  type: HomeActionTypes.FETCH_ARTICLES
});

export const setArticles = (articles: Article[]): SetArticlesAction => ({
  type: HomeActionTypes.SET_ARTICLES,
  articles
});

export const appendArticles = (articles: Article[]): AppendArticlesAction => ({
  type: HomeActionTypes.APPEND_ARTICLES,
  articles
});

export const fetchArticlesFailed = (): FetchArticlesFailedAction => ({
  type: HomeActionTypes.FETCH_ARTICLES_FAILED
});
