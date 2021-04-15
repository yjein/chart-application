import React from "react"
import styled from "styled-components"

const NavLi: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleNavLi>{children}</StyleNavLi>
}

const StyleNavLi = styled.li`
  display: inline;
  margin: 0 1.5rem;
  padding-bottom: 0.25rem;
  list-style: none;
  color: #333333;
  font-weight: 700;
  background-color: #c9c9c9;

  &:hover {
    border-bottom: 5px solid #666666;
  }
`

export default NavLi
