import React from "react"
import styled from "styled-components"

interface Props {
  border?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Button: React.FC<{}> = (props, { border, onClick }) => {
  const { children } = props
  return <StyleButton border={border} onClick={onClick}>{children}</StyleButton>
}

const StyleButton = styled.div`
  margin: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border: ${(props: Props) =>
    props.border === "none" ? "none" : `0.25rem solid #333333`};
  border-radius: 0.5rem;
  cursor: pointer;
`

export default Button
