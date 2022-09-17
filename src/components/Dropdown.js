import React from "react"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"

const StyleDropdown = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "hidden")};
`

const IconDrop = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: #251061;
  outline: none;
  background: transparent;
`

const CloseIcon = styled(FaTimes)`
  color: #251061;
`

const DropdownWrap = styled.div`
  color: #251061;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const DropMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  }
`

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #251061;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  text-decoration: none;
  list-style: none;
  padding: 1rem;
  background: #00ffc2;
  outline: none;

  &:hover {
    color: #251061;
    background: #00ffc2;
    transition: 0.4s ease-in-out;
  }
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <StyleDropdown isOpen={isOpen} onClick={toggle}>
      <IconDrop onClick={toggle}>
        <CloseIcon />
      </IconDrop>
      <DropdownWrap onClick={toggle}>
        <DropMenu onClick={toggle}>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropMenu>
        <ButtonWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact
          </Button>
        </ButtonWrap>
      </DropdownWrap>
    </StyleDropdown>
  )
}

export default Dropdown
