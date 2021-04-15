import React from "react"
import styled from "styled-components"

const SideBtn: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleSideBtn>{children}</StyleSideBtn>
}

const StyleSideBtn = styled.button`
  margin: 0.5rem;
`

export default SideBtn
