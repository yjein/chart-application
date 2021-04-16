import styled from "styled-components"

const LogoBgStyle = styled.div`
  min-width: 500px;
  background: linear-gradient(to right, #dbdbdb 50%, #606060 50%);
`

const LogoStyle = styled.div`
  width: 200px;
  height: 60px;
  margin: 4rem auto;
  background-color: #444444;
`

const Logo = () => {
  return (
    <LogoBgStyle>
      <LogoStyle>RaonChart</LogoStyle>
    </LogoBgStyle>
  )
}

export default Logo
