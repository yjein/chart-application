import styled from "styled-components"
import Header from "../Templates/mainHeader"
import Main from "../Templates/mainMain"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
`

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  )
}

export default MainPage
