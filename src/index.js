import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import Router from "./containers/Router"
import * as serviceWorker from "./serviceWorker"
import GlobalStyle from "./globalStyle"
import configureStore from "./configureStore"
import history from "./utils/history"

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById("root")

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
