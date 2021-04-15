import React from "react"
import styled from "styled-components"

const LogoStyle = styled.div`
  width: 200px;
  height: 60px;
  margin: 4rem auto;
  background-color: #444444;
`

const Logo: React.FC<{}> = (props) => {
  const { children } = props
  return <LogoStyle>{children}</LogoStyle>
}

export default Logo
