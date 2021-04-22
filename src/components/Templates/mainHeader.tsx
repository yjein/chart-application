import styled from "styled-components"
import MainLogo from "../Organisms/mainLogo"
import MainNav from "../Organisms/mainNav"

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #666666;
`

const MainHeader = () => {
  return (
    <Header>
      <MainLogo />
      <MainNav />
    </Header>
  )
}

export default MainHeader
