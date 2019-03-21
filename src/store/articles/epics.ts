import { ofType, Epic } from "redux-observable";
import { withLatestFrom, switchMap, map, catchError } from "rxjs/operators";
import { from, of } from "rxjs";
import ApiService from "../../services/ApiService";
import { setArticles, fetchArticlesFailed, appendArticles } from "./actions";
import { ArticlesActionTypes, FetchArticlesAction } from "./types";
import { RootState, RootActions } from "../types";

export const fetchArticlesEpic: Epic<RootActions, RootActions, RootState> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType<RootActions, FetchArticlesAction>(
      ArticlesActionTypes.FETCH_ARTICLES
    ),
    withLatestFrom(state$),
    switchMap(([_, state]) =>
      from(
        ApiService.get(
          `/articles?offset=${
            state.articles.page ? state.articles.page * 20 : 0
          }`
        )
      ).pipe(
        map(res =>
          state.articles.list.length
            ? appendArticles(res.data.articles)
            : setArticles(res.data.articles)
        ),
        catchError(error => of(fetchArticlesFailed()))
      )
    )
  );
