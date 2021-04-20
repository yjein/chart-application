import React from "react"
import styled from "styled-components"

const P: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleP>{children}</StyleP>
}

const StyleP = styled.p``

export default P
