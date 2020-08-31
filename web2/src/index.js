import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import setAuthorizationToken from './redux/utils/setAuthorizationToken';
import stores from './redux/store'
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './redux/actions/auth.action';
import App from "./layouts/App"
import "./assets/styles/app.scss";

const store = createStore(
  stores,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

const Root = (
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
