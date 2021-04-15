import React from "react"
import NavBar from "../Atoms/navBar"
import Logo from "../Atoms/logo"
import NavUl from "../Atoms/navUl"
import NavLi from "../Atoms/navLi"

const NavItem = () => {
  return (
    <NavBar>
      <Logo>RaonChart</Logo>
      <NavUl>
        <NavLi>home</NavLi>
        <NavLi>chart</NavLi>
        <NavLi>docs</NavLi>
        <NavLi>contect</NavLi>
      </NavUl>
    </NavBar>
  )
}

export default NavItem
