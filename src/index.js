import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./core/routes";

import SnackbarProvider from "./components/SnackbarProvider";

import { ThemeProvider } from "@material-ui/core/styles";

import * as serviceWorker from "./serviceWorker";

import theme from "./theme";

import "./global.scss";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Router basename="/">
          <Routes />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
