import React from "react"
import { ThemeData, ThemeDataType } from "../../../assets/ThemeData"
import { Container, ThemeContainer, Btn } from "./styled"

interface Props {
  setThemeState: React.Dispatch<React.SetStateAction<ThemeDataType>>
}

const ThemeBtn: React.FC<Props> = ({ setThemeState }) => {
  return (
    <Container>
      {Object.entries(ThemeData).map((item) => (
        <ThemeContainer
          key={item[0]}
          onClick={() => setThemeState(item[0] as ThemeDataType)}
          item={item[1].backgroundColor}
        >
          {item[1].color.map((item) => (
            <Btn item={item} />
          ))}
        </ThemeContainer>
      ))}
    </Container>
  )
}

export default ThemeBtn
