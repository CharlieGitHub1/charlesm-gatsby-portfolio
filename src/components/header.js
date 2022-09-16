import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import Logo from "../assets/logos/white-logo.svg"

const NavBar = styled.nav`
  display: flex;
  background: ${({ active }) =>
    active ? "#251061" : "linear-gradient(300deg, #251061 26%, #00ffc2 117%)"};
  height: 70px;
  justify-content: space-between;
  z-index: 100;
  position: absolute;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    background: ${({ click }) => (click ? "#251061" : "transparent")};
  }
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
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)

    return () => {
      window.removeEventListener("scroll", changeNav)
    }
  }, [])

  return (
    <NavBar active={scroll} click={click}>
      <NavLink>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Link>
      </NavLink>
      <Bars onClick={handleClick} />
      <NavMenu onClick={handleClick} click={click} active={scroll}>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index} onClick={closeMobileMenu}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavButton>
        <Button
          to="/sign-up"
          primary="true"
          round="true"
          big="true"
          onClick={closeMobileMenu}
        >
          Sign Up
        </Button>
      </NavButton>
    </NavBar>
  )
}

export default Header
