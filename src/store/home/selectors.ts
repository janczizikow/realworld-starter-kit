import { Article } from "./types";

export const getArticleBySlug = (articleSlug: string, articles: Article[]) => {
  return articles.find(article => article.slug === articleSlug);
};
