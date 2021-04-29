import React from "react"
import { ThemeDataType } from "../../../assets/ThemeData"
import { Container, ThemeContainer, Btn } from "./styled"

interface Props {
  themeName: ThemeDataType[]
  setThemeState: React.Dispatch<React.SetStateAction<ThemeDataType>>
}

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
