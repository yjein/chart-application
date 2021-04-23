import React from "react"
import styled from "styled-components"

// const StyleH1 = styled.h1``

const H1: React.FC<{}> = (props) => {
  return <h1>{props.children}</h1>
}

export default H1
