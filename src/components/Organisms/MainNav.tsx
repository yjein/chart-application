import React from "react"
import styled from "styled-components"
import { PageType } from "../../App"

const Nav = styled.nav`
  display: flex;
  height: 2.5rem;
  background-color: #cccccc;
`

const Ul = styled.ul`
  margin: auto 0;
`

const Li = styled.li`
  display: inline;
  margin: 0 1.25rem;
  padding-bottom: 0.25rem;
  list-style: none;
  font-size: 1.25rem;
  font-weight: 700;
  color: #444444;

  &:hover {
    border-bottom: solid 0.25rem #444444;
  }
`

interface Props {
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
}

const MainNav: React.FC<Props> = (props) => {
  const { setPageState } = props
  return (
    <Nav>
      <Ul>
        <Li>Home</Li>
        <Li onClick={() => setPageState("ChartPage")}
        >
          Charts
        </Li>
        <Li>Docs</Li>
        <Li>Contact</Li>
      </Ul>
    </Nav>
  )
}

export default MainNav
