import React from "react"
import styled from "styled-components"
import Button from "../Atoms/button"
import ChartNav from "../Organisms/chartNav"

const ChartHeader = () => {
  return (
    <Header>
      <div>
        <Button>=</Button>
      </div>
      <ChartNav />
    </Header>
  )
}

const Header = styled.header`
  display: grid;
  position: sticky;
  grid-column: 1 / 3;
  grid-template-columns: 200px auto;
  top: 0;
  z-index: 1;
  background-color: #cccccc;
`

export default ChartHeader
