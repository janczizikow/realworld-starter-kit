import {
  Article,
  ArticlesActionTypes,
  FetchArticlesAction,
  SetArticlesAction,
  AppendArticlesAction,
  FetchArticlesFailedAction
} from "./types";

export const fetchArticles = (): FetchArticlesAction => ({
  type: ArticlesActionTypes.FETCH_ARTICLES
});

export const setArticles = (articles: Article[]): SetArticlesAction => ({
  type: ArticlesActionTypes.SET_ARTICLES,
  articles
});

export const appendArticles = (articles: Article[]): AppendArticlesAction => ({
  type: ArticlesActionTypes.APPEND_ARTICLES,
  articles
});

export const fetchArticlesFailed = (): FetchArticlesFailedAction => ({
  type: ArticlesActionTypes.FETCH_ARTICLES_FAILED
});
