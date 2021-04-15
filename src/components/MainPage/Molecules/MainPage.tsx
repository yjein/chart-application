import styled from "styled-components"

import {
  Wrapper,
  Header,
  LogoBg,
  Logo,
  Nav,
  Main,
  Dashbord,
  Ul,
  Li,
  Div,
} from "../../../style/main"

const MainPage = () => {
  return (
    <Wrapper>
      <Header>
        <LogoBg>
          <Logo>Raon</Logo>
        </LogoBg>
        <Nav>
          <Ul>
            <Li>home</Li>
            <Li>chart</Li>
            <Li>docs</Li>
            <Li>contact</Li>
          </Ul>
        </Nav>
      </Header>
      <Main>
        <Dashbord>
          <Div />
          <Div />
          <Div />
          <Div />
          <Div />
          <Div />
          <Div />
          <Div />
          <Div />
          <Div />
          <Div />
          <Div />
        </Dashbord>
      </Main>
    </Wrapper>
  )
}

export default MainPage
