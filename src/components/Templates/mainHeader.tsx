import styled from "styled-components"
import Logo from "../Organisms/mainLogo"
import Nav from "../Organisms/mainNav"

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #606060;
`

const MainHeader = () => {
  return (
    <Header>
      <Logo />
      <Nav />
    </Header>
  )
}

export default MainHeader
