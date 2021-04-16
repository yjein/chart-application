import styled from "styled-components"

const ImageStyle = styled.img`
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

const Image = () => {
  return <ImageStyle />
}

export default Image
