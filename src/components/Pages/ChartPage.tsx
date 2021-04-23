import React from "react"
import styled from "styled-components"
import ChartHeader from "../Templates/ChartHeader"
import ChartAside from "../Templates/ChartAside"
import ChartMain from "../Templates/ChartMain"
import ChartList from "../Organisms/ChartList"
import Button from "../Atoms/Button"
import ChartNav from "../Organisms/ChartNav"
import ChartChart from "../Organisms/ChartChart"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
`

const Line = styled.div`
  margin: 0.25rem auto;
  height: 0.25rem;
  border-radius: 0.25rem;
  background: #666666;
`

const ChartPage = () => {
  return (
    <Wrapper>
      <ChartHeader>
        <div>
          <Button>
            <Line />
            <Line />
            <Line />
          </Button>
        </div>
        <ChartNav />
      </ChartHeader>

      <ChartAside>
        <ChartList />
      </ChartAside>

      <ChartMain>
        <ChartChart />
      </ChartMain>
    </Wrapper>
  )
}

export default ChartPage
