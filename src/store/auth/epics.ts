import { ofType, Epic } from "redux-observable";
import {
  tap,
  mergeMap,
  map,
  catchError,
  ignoreElements,
  throttleTime
} from "rxjs/operators";
import { from, of } from "rxjs";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthActionTypes } from "./types";
import { authSuccess, authFailed } from "./actions";
import ApiService from "../../services/ApiService";

export const setTokenEpic: Epic = action$ =>
  action$.pipe(
    ofType(AuthActionTypes.AUTH_SUCCESS),
    throttleTime(500),
    tap(action => AsyncStorage.setItem("userToken", action.user.token)),
    ignoreElements()
  );

export const removeTokenEpic: Epic = action$ =>
  action$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(_ => AsyncStorage.removeItem("userToken")),
    ignoreElements()
  );

export const loginEpic: Epic = action$ =>
  action$.pipe(
    ofType(AuthActionTypes.LOGIN),
    mergeMap(action =>
      from(ApiService.post("/users/login", { user: action.payload })).pipe(
        map(res => authSuccess(res.data.user)),
        catchError(error => of(authFailed(error.response.data.errors)))
      )
    )
  );

export const registerEpic: Epic = action$ =>
  action$.pipe(
    ofType(AuthActionTypes.REGISTER),
    mergeMap(action =>
      from(ApiService.post("/users", { user: action.payload })).pipe(
        map(response => authSuccess(response.data.user)),
        catchError(error => of(authFailed(error.response.data.errors)))
      )
    )
  );
