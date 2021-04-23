import styled from "styled-components"
import MainHeader from "../Templates/MainHeader"
import MainLogo from "../Organisms/MainLogo"
import Nav from "../Organisms/Nav"
import MainMain from "../Templates/MainMain"
import MainDashBord from "../Organisms/DashBord"
import React from "react"
import { PageType } from "../../App"

interface Props {
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`

const MainPage: React.FC<Props> = (props) => {
  const { setPageState } = props
  return (
    <Wrapper>
      <MainHeader>
        <MainLogo>RaonChart</MainLogo>
        <Nav setPageState={setPageState} />
      </MainHeader>
      <MainMain>
        <MainDashBord />
      </MainMain>
    </Wrapper>
  )
}

export default MainPage
