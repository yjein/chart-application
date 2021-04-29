import React from "react"
import styled from "styled-components"

const LogoBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  background: linear-gradient(to right, #c9c9c9 50%, #666666 50%);
`

const Logo = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
  background-color: #444444;
`

export const MainLogo: React.FC<{}> = (props) => {
  const { children } = props
  return (
    <LogoBackground>
      <Logo>{children}</Logo>
    </LogoBackground>
  )
}
