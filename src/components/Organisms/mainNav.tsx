import styled from "styled-components"

const NavStyle = styled.nav`
  height: 2rem;
  background-color: #dbdbdb;
`

const UlStyle = styled.ul`
  display: flex;
  margin: auto 0;
`

const LiStyle = styled.li`
  list-style: none;
  margin: 0 1.2rem;
  padding-bottom: 0.25rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #444444;

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
