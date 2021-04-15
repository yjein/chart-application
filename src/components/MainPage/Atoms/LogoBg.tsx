import styled from "styled-components"

const LogoBgStyle = styled.div`
  min-width: 500px;
  background: linear-gradient(to right, #dbdbdb 50%, #606060 50%);
`

const LogoBg: React.FC<{}> = (props) => {
  const { children } = props
  return <LogoBgStyle>{children}</LogoBgStyle>
}

export default LogoBg
