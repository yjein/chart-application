import React from "react"
import styled from "styled-components"
import H1 from "../Atoms/h1"
import P from "../Atoms/p"

const InfoItem = () => {
  return (
    <StyleInfoItem>
      <H1>Chart Name</H1>
      <P>Chart Explanation</P>
    </StyleInfoItem>
  )
}

const StyleInfoItem = styled.div`
  margin-bottom: 1rem;
`

export default InfoItem
