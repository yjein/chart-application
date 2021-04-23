import React from "react"
import styled from "styled-components"

const Main = styled.main`
  padding: 2.25rem;
  background-color: #999999;
`

const ChartMain: React.FC<{}> = (props) => {
  return <Main>{props.children}</Main>
}

export default ChartMain
