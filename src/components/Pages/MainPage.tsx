import styled from "styled-components"
import MainHeader from "../Templates/MainHeader"
import MainLogo from "../Organisms/MainLogo"
import MainNav from "../Organisms/MainNav"
import MainMain from "../Templates/MainMain"
import MainDashBord from "../Organisms/DashBord"
import React from "react"
import { PageType } from "../../App"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`
interface Props {
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
}

const MainPage: React.FC<Props> = (props) => {
  const { setPageState } = props
  return (
    <Wrapper>
      <MainHeader>
        <MainLogo>RaonChart</MainLogo>
        <MainNav setPageState={setPageState} />
      </MainHeader>
      <MainMain>
        <MainDashBord />
      </MainMain>
    </Wrapper>
  )
}

export default MainPage
