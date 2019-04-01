import { Reducer } from "redux";
import { HomeState, HomeActionTypes, HomeActions } from "./types";

const initialState = {
  isFetching: false,
  page: 0,
  articles: []
};

const reducer: Reducer<HomeState, HomeActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case HomeActionTypes.FETCH_ARTICLES:
      return {
        ...state,
        isFetching: true
      };
    case HomeActionTypes.SET_ARTICLES:
      return {
        ...state,
        isFetching: false,
        articles: action.articles,
        page: state.page + 1
      };
    case HomeActionTypes.APPEND_ARTICLES:
      return {
        ...state,
        isFetching: false,
        articles: [...state.articles, ...action.articles],
        page: state.page + 1
      };
    case HomeActionTypes.FETCH_ARTICLES_FAILED:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;
