import  React from "react"
import { menuData } from "../../data/MenuData"
import { Button } from "../Button"
import {
  NavBar,
  NavLink,
  Bars,
  NavMenu,
  NavButton,
} from "../styles/header_styles/HeaderStyles"

import Logo from "../../assets/logos/white-logo.svg"

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
