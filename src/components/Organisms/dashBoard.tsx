import styled from "styled-components"
import Image from "../Atoms/img"

const DashBordStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`

const DashBord = () => {
  return (
    <DashBordStyle>
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </DashBordStyle>
  )
}

export default DashBord
