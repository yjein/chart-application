import React from "react"
import styled from "styled-components"
import ChartHeader from "../Templates/ChartHeader"
import ChartAside from "../Templates/ChartAside"
import ChartMain from "../Templates/ChartMain"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  height: 100%;
`

const ChartPage = () => {
  return (
    <Wrapper>
      <ChartHeader />
      <ChartAside />
      <ChartMain />
    </Wrapper>
  )
}

export default ChartPage
