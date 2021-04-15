import React from "react"
import styled from "styled-components"

const NavUl: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleNavUl>{children}</StyleNavUl>
}

const StyleNavUl = styled.ul`
  margin: auto 0;
`

export default NavUl
