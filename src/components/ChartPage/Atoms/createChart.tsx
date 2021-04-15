import React from "react"
import styled from "styled-components"

const CreateChart: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleCreateChart>{children}</StyleCreateChart>
}

const StyleCreateChart = styled.div`
  height: 100px;
  background-color: #ffffff;
`

export default CreateChart
