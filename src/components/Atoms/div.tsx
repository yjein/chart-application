import styled from "styled-components"

const DivStyle = styled.div`
  background-color: #ffffff;

  &:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  &:nth-child(2) {
    grid-column: 3 / span 2;
    grid-row: 2 / span 2;
  }
`

const Div = () => {
  return <DivStyle />
}

export default Div
