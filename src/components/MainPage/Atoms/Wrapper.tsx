import styled from "styled-components"

const WrapperStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
`

const Wrapper: React.FC<{}> = (props) => {
  const { children } = props
  return <WrapperStyle>{children}</WrapperStyle>
}

export default Wrapper
