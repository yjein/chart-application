import React from "react"
import styled from "styled-components"

const Main: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleMain>{children}</StyleMain>
}

const StyleMain = styled.main`
  padding: 2.25rem;
  background-color: #999999;
`

export default Main
