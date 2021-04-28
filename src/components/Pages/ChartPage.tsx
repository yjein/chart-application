import styled from "styled-components"
import ChartHeader from "../Templates/ChartHeader"
import ChartAside from "../Templates/ChartAside"
import ChartMain from "../Templates/ChartMain"
import ChartList from "../Organisms/ChartList"
import Button from "../Atoms/Button"
import Nav from "../Organisms/Nav"
import ChartChart from "../Organisms/ChartChart"
import { PageType } from "../../App"
import ChartData, { ChartDataType } from "../../assets/ChartData"
import ThemeData, { ThemeDataType } from "../../assets/themeData"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content minmax(calc(100vw - 13.75rem), auto);
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
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  background-color: #444444;
`

interface Prop {
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
  chartState: ChartDataType
  setChartState: React.Dispatch<React.SetStateAction<ChartDataType>>
  toggleState: boolean
  setToggleState: React.Dispatch<React.SetStateAction<boolean>>
  themeState: ThemeDataType
  setThemeState: React.Dispatch<React.SetStateAction<ThemeDataType>>
}

const ChartPage: React.FC<Prop> = ({
  setPageState,
  chartState,
  setChartState,
  toggleState,
  setToggleState,
  themeState,
  setThemeState,
}) => {
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

      <ChartAside toggleState={toggleState}>
        <ChartList
          chartName={Object.keys(ChartData) as ChartDataType[]}
          setChartState={setChartState}
        />
      </ChartAside>

      <ChartMain>
        <ChartChart
          chartState={chartState}
          chartOption={ChartData[chartState].Option}
          gridOption={ChartData[chartState].Grid}
          themeOption={ThemeData[themeState]}
          setThemeState={setThemeState}
        />
      </ChartMain>
    </Wrapper>
  )
}

export default ChartPage
