import {
  createStore,
  applyMiddleware,
  combineReducers,
  Middleware
} from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import logger from "redux-logger";
import auth from "./auth/reducer";
import articles from "./articles/reducer";
import * as authEpics from "./auth/epics";
import * as articlesEpics from "./articles/epics";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { RootState, RootActions } from "./types";

const configureStore = (initialState?: RootState) => {
  const rootReducer = combineReducers({
    auth,
    articles
  });
  const rootEpic = combineEpics<RootActions, RootActions, RootState, {}>(
    authEpics.loginEpic,
    authEpics.registerEpic,
    authEpics.setTokenEpic,
    authEpics.removeTokenEpic,
    articlesEpics.fetchArticlesEpic
  );
  const epicMiddleware = createEpicMiddleware<
    RootActions,
    RootActions,
    RootState,
    {}
  >();
  const middlewares: Middleware[] = [epicMiddleware];

  if (__DEV__) {
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
