import React from "react"
import styled from "styled-components"
import H1 from "../Atoms/H1"
import P from "../Atoms/P"

const StyleInfoItem = styled.div`
  margin-bottom: 1rem;
`

const InfoItem = () => {
  return (
    <StyleInfoItem>
      <H1>Chart Name</H1>
      <P>Chart Explanation</P>
    </StyleInfoItem>
  )
}

export default InfoItem
