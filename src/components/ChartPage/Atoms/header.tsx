import React from "react"
import styled from "styled-components"

const Header: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleHeader>{children}</StyleHeader>
}

const StyleHeader = styled.header`
  display: grid;
  position: sticky;
  grid-column: 1 / 3;
  grid-template-columns: 200px auto;
  top: 0;
  z-index: 1;
  background-color: #cccccc;
`

export default Header
