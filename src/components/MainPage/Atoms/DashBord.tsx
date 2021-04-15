import styled from "styled-components"

const DashBordStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`

const DashBord: React.FC<{}> = (props) => {
  const { children } = props
  return <DashBordStyle>{children}</DashBordStyle>
}

export default DashBord
