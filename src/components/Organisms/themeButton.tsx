import React from "react"
import styled from "styled-components"
// import Button from "../Atoms/button"

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
  border-radius: 0.25rem;
  background-color: #ffffff;
`

const Btn = styled.div`
  margin: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-color: #666666;
  cursor: pointer;
`

export default ThemeBtn
