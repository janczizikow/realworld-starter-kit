import { Reducer } from "redux";
import { AuthState, AuthActionTypes, AuthActions } from "./types";

const initialState = {
  isFetching: false,
  user: null,
  errors: null
};

const auth: Reducer<AuthState, AuthActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.REGISTER:
      return {
        ...state,
        isFetching: true,
        errors: null
      };
    case AuthActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user
      };
    case AuthActionTypes.AUTH_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      };
    case AuthActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default auth;
