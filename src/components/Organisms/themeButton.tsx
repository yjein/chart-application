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
  background-color: #ffffff;
`

const Btn = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: #666666;
`

export default ThemeBtn
