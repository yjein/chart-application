import styled from "styled-components"
import React from "react"

interface UrlType {
  Url: string
}

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
`

const Image: React.FC<UrlType> = ({ Url }) => {
  return <ImgStyle src={Url} />
}

export default Image
