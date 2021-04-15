import React from "react"
import styled from "styled-components"

const Wrapper: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleWrapper>{children}</StyleWrapper>
}

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  height: 100%;
`

export default Wrapper
