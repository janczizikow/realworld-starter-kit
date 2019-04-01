import { ofType, Epic } from "redux-observable";
import { from, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { setComments } from "./actions";
import { CommentsService } from "../../services/ApiService";
import { ArticleActionTypes, FetchCommentsAction } from "./types";
import { RootState, RootActions } from "../types";

export const fetchCommentsEpic: Epic<
  RootActions,
  RootActions,
  RootState
> = action$ =>
  action$.pipe(
    ofType<RootActions, FetchCommentsAction>(ArticleActionTypes.FETCH_COMMENTS),
    mergeMap(action => {
      return from(CommentsService.get(action.slug)).pipe(
        map(res => setComments(res.data.comments)),
        catchError(error => of(setComments([])))
      );
    })
  );
