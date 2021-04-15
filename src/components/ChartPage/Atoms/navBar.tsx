import React from "react"
import styled from "styled-components"

const NavBar: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleNavBar>{children}</StyleNavBar>
}

const StyleNavBar = styled.nav`
  display: flex;
  background-color: #c9c9c9;
`

export default NavBar
