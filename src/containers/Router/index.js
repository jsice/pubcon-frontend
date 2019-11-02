import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "../HomePage"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
)

export default Routes
