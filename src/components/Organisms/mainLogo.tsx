import styled from "styled-components"

const LogoBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  background: linear-gradient(to right, #cccccc 50%, #666666 50%);
`

const LogoStyle = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
  background-color: #333333;
`

const Logo = () => {
  return (
    <LogoBackground>
      <LogoStyle>RaonChart</LogoStyle>
    </LogoBackground>
  )
}

export default Logo
