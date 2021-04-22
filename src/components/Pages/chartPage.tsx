import React from "react"
import styled from "styled-components"
import Header from "../Templates/chartHeader"
import Aside from "../Templates/chartAside"
import Main from "../Templates/chartMain"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  height: 100%;
`

const ChartPage = () => {
  return (
    <Wrapper>
      <Header />
      <Aside />
      <Main />
    </Wrapper>
  )
}

export default ChartPage
