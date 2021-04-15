import React from "react"
import styled from "styled-components"
import {
  Wrapper,
  Header,
  LeftBox,
  SideBtn,
  NavBar,
  Logo,
  NavUl,
  NavLi,
  SideBar,
  SideUl,
  SideLi,
  Main,
  Chart,
  GridToggle,
  ChartEx,
  CreateChart,
} from "../style/chart"

const ChartPage = () => {
  return (
    <Wrapper>
      <Header>
        <LeftBox>
          <SideBtn>=</SideBtn>
        </LeftBox>
        <NavBar>
          <Logo>RaonChart</Logo>
          <NavUl>
            <NavLi>home</NavLi>
            <NavLi>chart</NavLi>
            <NavLi>docs</NavLi>
            <NavLi>contect</NavLi>
          </NavUl>
        </NavBar>
      </Header>
      <SideBar>
        <SideUl>
          <SideLi>a</SideLi>
          <SideLi>b</SideLi>
          <SideLi>c</SideLi>
        </SideUl>
      </SideBar>
      <Main>
        <Chart>
          <ChartEx>Text</ChartEx>
          <GridToggle></GridToggle>
          <CreateChart></CreateChart>
        </Chart>
      </Main>
    </Wrapper>
  )
}

export default ChartPage
