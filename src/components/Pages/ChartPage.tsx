import React, { useState } from "react"
import styled from "styled-components"
import ChartHeader from "../Templates/ChartHeader"
import ChartAside from "../Templates/ChartAside"
import ChartMain from "../Templates/ChartMain"
import ChartList from "../Organisms/ChartList"
import Button from "../Atoms/Button"
import Nav from "../Organisms/Nav"
import ChartChart from "../Organisms/ChartChart"
import { PageType } from "../../App"
<<<<<<< HEAD
import ChartData, { ChartDataType } from "../../assets/ChartData"
=======
import ChartData from "../../assets/ChartData"

interface Props {
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
}
>>>>>>> a75ea8f1b995f16193b41e343927f30130de7ee0

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
  width: 7rem;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  background-color: #444444;
`

<<<<<<< HEAD
interface Prop {
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
  chartState: ChartDataType
  setChartState: React.Dispatch<React.SetStateAction<ChartDataType>>
}

const ChartPage: React.FC<Prop> = ({
  setPageState,
  chartState,
  setChartState,
}) => {
=======
const ChartPage: React.FC<Props> = ({ setPageState }) => {
  const [toggleState, setToggleState] = useState<boolean>(true)

>>>>>>> a75ea8f1b995f16193b41e343927f30130de7ee0
  return (
    <Wrapper>
      <ChartHeader>
        <div>
          <Button toggleState={toggleState} setToggleState={setToggleState}>
            <Line />
            <Line />
            <Line />
          </Button>
        </div>
        <Nav setPageState={setPageState}>
          <Logo>Raon Chart</Logo>
        </Nav>
      </ChartHeader>

<<<<<<< HEAD
      <ChartAside>
        <ChartList
          chartName={Object.keys(ChartData) as ChartDataType[]}
          setChartState={setChartState}
        />
=======
      <ChartAside toggleState={toggleState}>
        <ChartList chartName={Object.keys(ChartData)}/>
>>>>>>> a75ea8f1b995f16193b41e343927f30130de7ee0
      </ChartAside>

      <ChartMain>
        <ChartChart
          chartState={chartState}
          chartOption={ChartData[chartState].Option}
        />
      </ChartMain>
    </Wrapper>
  )
}

export default ChartPage
