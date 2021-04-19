import styled from "styled-components"
import Div from "../Atoms/div"

const DashBordStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`

const DashBord = () => {
  return (
    <DashBordStyle>
      <Div/>
      <Div/>
      <Div/>
      <Div/>
      <Div/>
      <Div/>
      <Div/>
      <Div/>
      <Div/>
      <Div/>
      <Div/>
      <Div/>
    </DashBordStyle>
  )
}

export default DashBord
