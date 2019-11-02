import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import Problems from "./Problems"
import Contests from "./Contests"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/problems" component={Problems} />
      <Route exact path="/contests" component={Contests} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Router
