import React from "react"
import styled from "styled-components"

const StyleH1 = styled.h1`
  margin-bottom: 0.5rem;
  padding: 0 1rem;
  width: fit-content;
  border-radius: 0 0.25rem 0 0;
  border-left: 0.75rem solid #5470c6;
  border-bottom: 0.25rem solid #828488;
  border-bottom: 2px solid #5470c6;
  text-align: center;
  background-color: #ffffff;
`

const H1: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleH1>{children}</StyleH1>
}

export default H1
