import React from "react"
import styled from "styled-components"

const GridToggle: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleGridToggle>{children}</StyleGridToggle>
}

const StyleGridToggle = styled.div`
  margin-bottom: 1rem;
  height: 100px;
  background-color: #ffffff;
`

export default GridToggle
