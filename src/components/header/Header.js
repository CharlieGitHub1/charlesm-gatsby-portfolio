import  React from "react"
import { Link } from "gatsby"
import { menuData } from "../../data/MenuData"
import { Button } from "../Button"
import {
  NavBar,
  NavLink,
  Bars,
  NavMenu,
  NavButton,
} from "../styles/header_styles/HeaderStyles"



const Header = () => {
  return (
    <NavBar>
      <NavLink>
        <Link to="/">
        <img
          src="/cm-grad.svg"
          alt="logo"
          style={{
            width: "100px",
            height: "100px",
            marginLeft: "24px",
          }}
        />
        </Link>
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink key={index}>
            <Link to={item.link}>{item.title}</Link>
          </NavLink>
        ))}
      </NavMenu>
      <NavButton>
        <Button primary="true" round="true" to="/contact">
          Contact Me
        </Button>
      </NavButton>
    </NavBar>
  )
}

export default Header
