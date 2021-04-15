import React from "react"
import Header from "../Atoms/header"
import LeftItem from "../Molecule/leftItem"
import NavItem from "../Molecule/navItem"

const HeaderContents = () => {
  return (
    <Header>
      <LeftItem />
      <NavItem />
    </Header>
  )
}

export default HeaderContents
