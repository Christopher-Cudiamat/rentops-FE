import {applyMiddleware, createStore, compose} from "redux";
import {rootReducer} from "./redux.config";
import thunk from "redux-thunk";
import {routerMiddleware} from "connected-react-router";
import {history} from "./redux.config";
import { loadState, saveState } from "../utils/setLocalStorage";

import throttle from 'lodash/throttle';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk.withExtraArgument({history})
    )
  ),
);

store.subscribe(throttle(() => {
  saveState({
    userAuth: store.getState().userAuth,
  });
}, 1000));

export default store;