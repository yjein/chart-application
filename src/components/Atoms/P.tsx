import React from "react"
import styled from "styled-components"

// const StyleP = styled.p``

const P: React.FC<{}> = (props) => {
  const { children } = props
  return <p>{children}</p>
}

export default P
