import React from "react"
import styled from "styled-components"

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 195px;
  background-color: #666666;
`

const MainHeader: React.FC<{}> = (props) => {
  const { children } = props
  return <Header>{children}</Header>
}

export default MainHeader
