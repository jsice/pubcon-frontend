import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "../HomePage"
import Login from "../Login/Login"
import Problems from "../Problems"
import Contests from "../Contests"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/problems" component={Problems} />
    <Route exact path="/contests" component={Contests} />
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default Routes
