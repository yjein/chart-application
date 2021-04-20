import React from "react"
import styled from "styled-components"

const H1: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleH1>{children}</StyleH1>
}

const StyleH1 = styled.h1``

export default H1
