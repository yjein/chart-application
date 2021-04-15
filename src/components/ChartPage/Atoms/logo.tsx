import React from "react"
import styled from "styled-components"

const Logo: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleLogo>{children}</StyleLogo>
}

const StyleLogo = styled.div`
  padding: 0.5rem;
  color: #ffffff;
  font-weight: 700;
  background-color: #666666;
`

export default Logo
