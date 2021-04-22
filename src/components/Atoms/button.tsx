import React from "react"
import styled from "styled-components"

// interface Props {
  // border?: string
  // onClick?: React.MouseEventHandler<HTMLDivElement>
// }

const Button: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleButton>{ children }</StyleButton>
}

const StyleButton = styled.div`
  margin: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`

export default Button
