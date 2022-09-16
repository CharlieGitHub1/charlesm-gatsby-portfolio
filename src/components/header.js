import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import Logo from "../assets/logos/white-logo.svg"

const NavBar = styled.nav`
  display: flex;
  background: transparent;
  height: 70px;
  justify-content: space-between;
  z-index: 100;
  position: relative;
`

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  margin: 0 0 0 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavButton = styled.div`
  display: flex;
  margin-right: 24px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const Header = () => {
  return (
    <NavBar>
      <NavLink to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "100px",
            height: "100px",
          }}
        />
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavButton>
        <Button primary="true" round="true" to="/sign-up">
          Sign Up
        </Button>
      </NavButton>
    </NavBar>
  )
}

export default Header
