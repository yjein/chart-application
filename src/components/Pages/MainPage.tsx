import styled from "styled-components"
import MainHeader from "../Templates/MainHeader"
import MainLogo from "../Organisms/MainLogo"
import MainNav from "../Organisms/MainNav"
import MainMain from "../Templates/MainMain"
import MainDashBord from "../Organisms/DashBord"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`

const MainPage = () => {
  return (
    <Wrapper>
      <MainHeader>
        <MainLogo>RaonChart</MainLogo>
        <MainNav />
      </MainHeader>
      <MainMain>
        <MainDashBord />
      </MainMain>
    </Wrapper>
  )
}

export default MainPage
