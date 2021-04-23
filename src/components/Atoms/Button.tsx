import React from "react"
import styled from "styled-components"

// interface Props {
// border?: string
// onClick?: React.MouseEventHandler<HTMLDivElement>
// }

const StyleButton = styled.div`
  margin: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`

const Button: React.FC<{}> = (props) => {
  return <StyleButton>{props.children}</StyleButton>
}

export default Button
