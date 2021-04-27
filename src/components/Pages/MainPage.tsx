import styled from "styled-components"
import MainHeader from "../Templates/MainHeader"
import MainLogo from "../Organisms/MainLogo"
import Nav from "../Organisms/Nav"
import MainMain from "../Templates/MainMain"
import MainDashBord from "../Organisms/DashBord"
import React from "react"
import { PageType } from "../../App"
import { ChartDataType } from "../../assets/ChartData"

interface Props {
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
  setChartState: React.Dispatch<React.SetStateAction<ChartDataType>>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`

const MainPage: React.FC<Props> = ({ setPageState, setChartState }) => {
  return (
    <Wrapper>
      <MainHeader>
        <MainLogo>RaonChart</MainLogo>
        <Nav setPageState={setPageState} />
      </MainHeader>
      <MainMain>
        <MainDashBord
          setPageState={setPageState}
          setChartState={setChartState}
        />
      </MainMain>
    </Wrapper>
  )
}

export default MainPage
