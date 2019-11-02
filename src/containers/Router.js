import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Router
