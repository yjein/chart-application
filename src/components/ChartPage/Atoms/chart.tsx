import React from "react"
import styled from "styled-components"

const Chart: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleChart>{children}</StyleChart>
}

const StyleChart = styled.div``

export default Chart
