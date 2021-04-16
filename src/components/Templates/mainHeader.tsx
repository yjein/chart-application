import styled from "styled-components"
import MainLogo from "../Organisms/mainLogo"
import MainNav from "../Organisms/mainNav"

const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #606060;
`

const MainHeader = () => {
  return (
    <HeaderStyle>
      <MainLogo />
      <MainNav />
    </HeaderStyle>
  )
}

export default MainHeader
