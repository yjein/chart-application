import React from "react"
import styled from "styled-components"

const LeftBox: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleLeftBox>{children}</StyleLeftBox>
}

const StyleLeftBox = styled.div``

export default LeftBox
