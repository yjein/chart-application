import React from "react"
import SideBar from "../Atoms/sideBar"
import SideUl from "../Atoms/sideUl"
import SideLi from "../Atoms/sideLi"

const SideItem = () => {
  return (
    <SideBar>
      <SideUl>
        <SideLi>a</SideLi>
        <SideLi>b</SideLi>
        <SideLi>c</SideLi>
      </SideUl>
    </SideBar>
  )
}

export default SideItem
