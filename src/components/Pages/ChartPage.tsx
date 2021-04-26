import React from "react"
import styled from "styled-components"
import ChartHeader from "../Templates/ChartHeader"
import ChartAside from "../Templates/ChartAside"
import ChartMain from "../Templates/ChartMain"
import ChartList from "../Organisms/ChartList"
import Button from "../Atoms/Button"
import Nav from "../Organisms/Nav"
import ChartChart from "../Organisms/ChartChart"
import { PageType } from "../../App"
import ChartData from "../../assets/ChartData"

interface Prop {
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
  chartState: string
  setChartState: React.Dispatch<React.SetStateAction<string>>
}

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

const Logo = styled.div`
  padding: 0.5rem;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  background-color: #444444;
`

const ChartPage: React.FC<Prop> = ({
  setPageState,
  chartState,
  setChartState,
}) => {
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
        <Nav setPageState={setPageState}>
          <Logo>Raon Chart</Logo>
        </Nav>
      </ChartHeader>

      <ChartAside>
        <ChartList
          setChartState={setChartState}
          chartName={Object.keys(ChartData)}
        />
      </ChartAside>

      <ChartMain>
        <ChartChart chartState={chartState} />
      </ChartMain>
    </Wrapper>
  )
}

export default ChartPage
