import React from "react"
// import styled from "styled-components"

// const StyleH1 = styled.h1``

const H1: React.FC<{}> = (props) => {
  const { children } = props
  return <h1>{children}</h1>
}


export default H1
