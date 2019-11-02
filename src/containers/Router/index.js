import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "../HomePage"
import ProblemsPage from "../ProblemsPage"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/problems" component={ProblemsPage} />
  </Switch>
)

export default Routes
