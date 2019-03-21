import { Reducer } from "redux";
import { ArticlesState, ArticlesActionTypes, ArticlesActions } from "./types";

const initialState = {
  isFetching: false,
  page: 0,
  list: []
};

const reducer: Reducer<ArticlesState, ArticlesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_ARTICLES:
      return {
        ...state,
        isFetching: true
      };
    case ArticlesActionTypes.SET_ARTICLES:
      return {
        ...state,
        isFetching: false,
        list: action.articles,
        page: state.page + 1
      };
    case ArticlesActionTypes.APPEND_ARTICLES:
      const list = state.list.concat(action.articles);
      return {
        ...state,
        isFetching: false,
        list,
        page: state.page + 1
      };
    default:
      return state;
  }
};

export default reducer;
