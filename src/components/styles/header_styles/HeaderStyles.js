import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"



export const NavBar = styled.nav`
  display: flex;
  background: "transparent";
  height: 70px;
  justify-content: space-between;
  z-index: 100;
  position: relative;
`

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  font-size: 1rem;
  margin: 0 0 0 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavButton = styled.div`
  display: flex;
  margin-right: 24px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

export const Bars = styled(FaBars)`
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