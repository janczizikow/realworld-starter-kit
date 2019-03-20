// State
export interface AuthState {
  isFetching: boolean;
  user: null | User;
  errors: null | Errors;
}

// Action Types
export enum AuthActionTypes {
  LOGIN = "auth/LOGIN",
  REGISTER = "auth/REGISTER",
  AUTH_SUCCESS = "auth/AUTH_SUCCESS",
  AUTH_FAILED = "AUTH_FAILED",
  LOGOUT = "auth/LOGUT"
}

export type AuthActionType =
  | AuthActionTypes.LOGIN
  | AuthActionTypes.REGISTER
  | AuthActionTypes.AUTH_SUCCESS
  | AuthActionTypes.AUTH_FAILED
  | AuthActionTypes.LOGOUT;

// Payloads
export interface User {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: null | string;
  image: string;
  token: string;
}

export interface AuthPayload {
  email: string;
  password: string;
}

export interface Errors {
  [key: string]: string[];
}

// Action creators

export interface LoginAction {
  type: AuthActionTypes.LOGIN;
  payload: AuthPayload;
}

export interface RegisterAction {
  type: AuthActionTypes.REGISTER;
  payload: AuthPayload & { username: string };
}

export interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
  user: User;
}

export interface AuthFailedAction {
  type: AuthActionTypes.AUTH_FAILED;
  errors: Errors;
}

export interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthActions =
  | LoginAction
  | RegisterAction
  | AuthSuccessAction
  | AuthFailedAction
  | LogoutAction;
