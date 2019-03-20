import { AuthState } from "./types";

export const isAuthenticated = (state: AuthState) => {
  return state.user !== null;
};

export default {
  isAuthenticated
};
