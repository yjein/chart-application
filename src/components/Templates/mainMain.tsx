import styled from "styled-components"
import DashBord from "../Organisms/dashBoard"

const MainStyle = styled.div`
  display: grid;
  padding: 2rem;
  background-color: #999999;
`

const Main = () => {
  return (
    <MainStyle>
      <DashBord />
    </MainStyle>
  )
}

export default Main
