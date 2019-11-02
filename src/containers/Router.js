import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import Login from "./Login"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Router
