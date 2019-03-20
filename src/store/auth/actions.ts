import {
  AuthActionTypes,
  User,
  Errors,
  LoginAction,
  RegisterAction,
  AuthSuccessAction,
  AuthFailedAction,
  LogoutAction
} from "./types";

export const login = (payload: {
  email: string;
  password: string;
}): LoginAction => ({
  type: AuthActionTypes.LOGIN,
  payload
});

export const register = (payload: {
  username: string;
  email: string;
  password: string;
}): RegisterAction => ({
  type: AuthActionTypes.REGISTER,
  payload
});

export const authSuccess = (user: User): AuthSuccessAction => ({
  type: AuthActionTypes.AUTH_SUCCESS,
  user
});

export const authFailed = (errors: Errors): AuthFailedAction => ({
  type: AuthActionTypes.AUTH_FAILED,
  errors
});

export const logout = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT
});
