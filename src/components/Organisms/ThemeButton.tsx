import React from "react"
import styled from "styled-components"
import { ThemeDataType } from "../../assets/ThemeData"
// import Button from "../Atoms/Button"

interface Props {
  themeName: ThemeDataType[]
  setThemeState: React.Dispatch<React.SetStateAction<ThemeDataType>>
}

const Container = styled.div`
  display: flex;
`

const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  padding: 0.5rem;
  width: 9rem;
  border: 1px solid #eeeeee;
  border-radius: 0.25rem;
  background-color: #ffffff;
  cursor: pointer;
`

const Btn = styled.div`
  margin: 0 2px;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-color: #666666;
`

const ThemeBtn: React.FC<Props> = ({ themeName, setThemeState }) => {
  return (
    <Container>
      {themeName.map((item) => (
        <ThemeContainer key={item} onClick={() => setThemeState(item)}>
          <Btn />
          <Btn />
          <Btn />
          <Btn />
        </ThemeContainer>
      ))}
    </Container>
  )
}

export default ThemeBtn
