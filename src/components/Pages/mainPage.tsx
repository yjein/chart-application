import styled from "styled-components"
import MainHeader from "../Templates/mainHeader"
import MainLogo from "../Organisms/mainLogo"
import MainNav from "../Organisms/mainNav"
import MainMain from "../Templates/mainMain"
import MainDashBord from "../Organisms/dashBoard"

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
