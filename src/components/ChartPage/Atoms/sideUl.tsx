import React from "react"
import styled from "styled-components"

const SideUl: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleSideUl>{children}</StyleSideUl>
}

const StyleSideUl = styled.ul`
  margin: 0;
  padding: 0;
`

export default SideUl
