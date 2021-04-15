import React from "react"
import Wrapper from "../Atoms/wrapper"
import HeaderContents from "../Oraganisms/headerContents"
import SideItem from "../Molecule/sideItem"
import MainContents from "../Oraganisms/mainContents"

const ChartPage = () => {
  return (
    <Wrapper>
      <HeaderContents />
      <SideItem />
      <MainContents />
    </Wrapper>
  )
}

export default ChartPage
