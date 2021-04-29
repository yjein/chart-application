import styled from "styled-components"
import { MainHeader } from "../Templates/MainHeader"
import { MainLogo } from "../Organisms/MainLogo"
import { MainNav } from "../Organisms/Nav"
import { Main } from "../Templates/MainMain"
import { MainDashBord } from "../Organisms/DashBord"
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
        <MainNav setPageState={setPageState} />
      </MainHeader>
      <Main>
        <MainDashBord
          setPageState={setPageState}
          setChartState={setChartState}
        />
      </Main>
    </Wrapper>
  )
}

export default MainPage
