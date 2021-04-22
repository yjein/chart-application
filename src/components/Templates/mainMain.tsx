import styled from "styled-components"
import MainDashBord from "../Organisms/dashBoard"

const MainStyle = styled.div`
  display: grid;
  padding: 2rem;
  background-color: #999999;
`

const Main = () => {
  return (
    <MainStyle>
      <MainDashBord />
    </MainStyle>
  )
}

export default Main
