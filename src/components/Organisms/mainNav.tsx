import styled from "styled-components"

const NavStyle = styled.nav`
  height: 2rem;
  background-color: #dbdbdb;
`

const UlStyle = styled.ul`
  margin-top: 0.2rem;
`

const LiStyle = styled.li`
  display: inline;
  margin-right: 2rem;
  font-size: 1.2rem;
  font-weight: 700;

  &:hover {
    border-bottom: solid 0.2rem #444444;
  }
`

const mainNavBar = () => {
  return (
    <NavStyle>
      <UlStyle>
        <LiStyle>Home</LiStyle>
        <LiStyle>Charts</LiStyle>
        <LiStyle>Docs</LiStyle>
        <LiStyle>Contact</LiStyle>
      </UlStyle>
    </NavStyle>
  )
}

export default mainNavBar
