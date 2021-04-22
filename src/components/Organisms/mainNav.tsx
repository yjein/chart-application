import styled from "styled-components"

const Nav = styled.nav`
  height: 2rem;
  background-color: #dbdbdb;
`

const Ul = styled.ul`
  display: flex;
  margin: auto 0;
`

const Li = styled.li`
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

const MainNav = () => {
  return (
    <Nav>
      <Ul>
        <Li>Home</Li>
        <Li>Charts</Li>
        <Li>Docs</Li>
        <Li>Contact</Li>
      </Ul>
    </Nav>
  )
}

export default MainNav
