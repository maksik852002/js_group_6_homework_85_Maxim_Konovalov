import React from "react";
import ReactDOM from "react-dom";
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from "connected-react-router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import App from "./App";
import artistsReducer from "./store/reducers/artistsReducer";
import albumsReducer from "./store/reducers/albumsReducer";
import usersReducer from "./store/reducers/usersReducer";
import "./bootstrap.min.css";
import trackHistoryReducer from "./store/reducers/trackHistoryReducer";

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  router: connectRouter(history),
  artists: artistsReducer,
  albums: albumsReducer,
  users: usersReducer,
  history: trackHistoryReducer
});

const middleware = [thunkMiddleware, routerMiddleware(history)];
const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancers);

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
