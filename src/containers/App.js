import React from "react"
import logo from "../assets/logo.svg"
import { AppWrapper, AppHeader, AppLink, AppLogo } from "../components/App"

const App = () => (
  <AppWrapper>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <p>
        Edit <code>src/containers/App.js</code> and save to reload.
      </p>
      <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </AppLink>
    </AppHeader>
  </AppWrapper>
)

export default App
