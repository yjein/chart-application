import styled from "styled-components"

const LogoBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 500px;
  background: linear-gradient(to right, #dbdbdb 50%, #606060 50%);
`

const LogoStyle = styled.div`
  text-align: center;
  font-size: 3rem;
  background-color: #444444;
`

const Logo = () => {
  return (
    <LogoBackground>
      <LogoStyle>RaonChart</LogoStyle>
    </LogoBackground>
  )
}

export default Logo
