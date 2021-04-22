import React from "react"
import styled from "styled-components"

const StyleChartNav = styled.nav`
  display: flex;
  background-color: #c9c9c9;
`

const Logo = styled.div`
  padding: 0.5rem;
  color: #ffffff;
  font-weight: 700;
  background-color: #666666;
`

const Ul = styled.ul`
  margin: auto 0;
`

const Li = styled.li`
  display: inline;
  margin: 0 1.5rem;
  padding-bottom: 0.25rem;
  list-style: none;
  color: #444444;
  font-weight: 700;
  background-color: #c9c9c9;

  &:hover {
    border-bottom: 5px solid #444444;
  }
`

const ChartNav = () => {
  return (
    <StyleChartNav>
      <Logo>RaonChart</Logo>
      <Ul>
        <Li>home</Li>
        <Li>chart</Li>
        <Li>docs</Li>
        <Li>contects</Li>
      </Ul>
    </StyleChartNav>
  )
}

export default ChartNav
