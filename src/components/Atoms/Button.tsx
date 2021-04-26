import React from "react"
import styled from "styled-components"

interface Props {
  toggleState: boolean
  setToggleState: React.Dispatch<React.SetStateAction<boolean>>
}

const StyleButton = styled.div`
  padding: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`

const Button: React.FC<Props> = (props) => {
  const { children, toggleState, setToggleState } = props

  return (
    <StyleButton onClick={() => setToggleState(!toggleState)}>
      {children}
    </StyleButton>
  )
}

export default Button
