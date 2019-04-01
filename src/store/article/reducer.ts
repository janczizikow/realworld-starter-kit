import { Reducer } from "redux";
import { ArticleState, ArticleActions, ArticleActionTypes } from "./types";

const initialState = {
  isFetching: false,
  comments: [],
  errors: null,
  commentsLastLoaded: null
};

const reducer: Reducer<ArticleState, ArticleActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_COMMENTS:
      return {
        ...state,
        isFetching: true
      };
    case ArticleActionTypes.SET_COMMENTS:
      return {
        ...state,
        isFetching: false,
        comments: action.comments,
        commentsLastLoaded: Date.now()
      };
    case ArticleActionTypes.RESET_COMMENTS:
      return {
        ...state,
        comments: [],
        commentsLastLoaded: null
      };
    default:
      return state;
  }
};

export default reducer;
