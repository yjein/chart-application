import React from "react"
import styled from "styled-components"

const ThemeBtn = () => {
  return (
    <StyleThemeBtn>
      <Btn />
      <Btn />
      <Btn />
      <Btn />
    </StyleThemeBtn>
  )
}

const StyleThemeBtn = styled.nav`
  display: flex;
  border-radius: 0.75rem;
  background-color: #ffffff;
`

const Btn = styled.div`
  margin: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.75rem;
  background-color: #666666;
  cursor: pointer;
`

export default ThemeBtn
