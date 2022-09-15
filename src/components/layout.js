import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/sign-up">Sign Up</Link>
      </Header>
      <main>{children}</main>
    </>
  )
}

export default Layout
