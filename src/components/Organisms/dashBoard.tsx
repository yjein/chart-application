import styled from "styled-components"
import Image from "../Atoms/img"
import ChartData from "../../assets/ChartData"

const DashBord = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`

const Div = styled.div`
  &:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  &:nth-child(2) {
    grid-column: 3 / span 2;
    grid-row: 2 / span 2;
  }
`

const MainDashBord = () => {
  return (
    <DashBord>
      {ChartData.map((item) => (
        <Div>
          <Image url={item} />
        </Div>
      ))}
    </DashBord>
  )
}

export default MainDashBord
