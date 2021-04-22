import styled from "styled-components"
import MainHeader from "../Templates/mainHeader"
import MainMain from "../Templates/mainMain"

const WrapperStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
`

const MainPage = () => {
  return (
    <WrapperStyle>
      <MainHeader />
      <MainMain />
    </WrapperStyle>
  )
}

export default MainPage
