import React from "react"
import styled from "styled-components"
import H1 from "../Atoms/H1"
import P from "../Atoms/P"

interface Props {
  name: string
  explanation: Object
}

const StyleInfoItem = styled.div`
  margin-bottom: 1.5rem;
`

const InfoItem: React.FC<Props> = ({ name, explanation }) => {
  return (
    <StyleInfoItem>
      <H1>{name}</H1>
      <P>{explanation}</P>
    </StyleInfoItem>
  )
}

export default InfoItem
