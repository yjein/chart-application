import React from "react"
import styled from "styled-components"

const Button: React.FC<{}> = (props) => {
  const { children } = props
  return (
    <StyleButton>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </StyleButton>
  )
}

const StyleButton = styled.div`
  margin: 0.5rem;
  width: 20px;
  height: 20px;
  border: 0.25rem solid #333333;
  border-radius: 0.5rem;
  cursor: pointer;
`

const Line = styled.div``

export default Button
