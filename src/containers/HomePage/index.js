import React from "react"
import logo from "../../assets/logo.svg"
import {
  HomePageWrapper,
  HomePageHeader,
  HomePageLink,
  HomePageLogo,
} from "../../components/HomePage"
import Home from "../Home"

const HomePage = () => (
  <HomePageWrapper>
    <HomePageHeader>
      <Home />
      <HomePageLogo src={logo} alt="logo" />
      <p>
        Edit <code>src/containers/HomePage</code> and save to reload.
      </p>
      <HomePageLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </HomePageLink>
    </HomePageHeader>
  </HomePageWrapper>
)

export default HomePage
