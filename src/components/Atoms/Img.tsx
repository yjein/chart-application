import styled from "styled-components"
import React from "react"

interface Url {
  url: string
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const Image: React.FC<Url> = ({ url }) => {
  return <Img src={url} />
}

export default Image
