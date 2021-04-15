import React from "react"
import styled from "styled-components"

const ChartEx: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleChartEx>{children}</StyleChartEx>
}

export const StyleChartEx = styled.div`
  margin-bottom: 1rem;
`

export default ChartEx
