import styled from "styled-components"

const MainStyle = styled.div`
  display: grid;
  padding: 2rem;
  background-color: #909090;
`

const Main: React.FC<{}> = (props) => {
  const { children } = props
  return <MainStyle>{children}</MainStyle>
}

export default Main
