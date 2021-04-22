import styled from "styled-components"
import MainHeader from "../Templates/mainHeader"
import MainMain from "../Templates/mainMain"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
`

const MainPage = () => {
  return (
    <Wrapper>
      <MainHeader />
      <MainMain />
    </Wrapper>
  )
}

export default MainPage
