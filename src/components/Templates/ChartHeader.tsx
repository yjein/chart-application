import React from "react"
import styled from "styled-components"

const Header = styled.header`
  display: grid;
  position: sticky;
  grid-column: 1 / 3;
  grid-template-columns: 200px auto;
  top: 0;
  z-index: 1;
  background-color: #cccccc;
`

const ChartHeader: React.FC<{}> = (props) => {
  return <Header>{props.children}</Header>
}

export default ChartHeader
