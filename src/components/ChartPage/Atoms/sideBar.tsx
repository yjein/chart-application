import React from "react"
import styled from "styled-components"

const SideBar: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleSideBar>{children}</StyleSideBar>
}

const StyleSideBar = styled.div`
  position: sticky;
  top: 0;
  overflow-x: auto;
  width: 200px;
  height: 100vh;
  background-color: #c9c9c9;

  &::-webkit-scrollbar {
    display: none;
  }
`

export default SideBar
