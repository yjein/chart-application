import React from "react"
import styled from "styled-components"

const StyleP = styled.p`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 3px solid #c9c9c9;
  border-radius: 0.25rem;
  background-color: #ffffff;
`

const P: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleP>{children}</StyleP>
}

export default P
