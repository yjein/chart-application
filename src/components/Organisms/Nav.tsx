import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  height: 2.75rem;
  background-color: #c9c9c9;
`

const Ul = styled.ul`
  margin: auto 0;
`

const Li = styled.li`
  display: inline;
  margin: 0 1.5rem;
  padding-bottom: 0.25rem;
  list-style: none;
  color: #444444;
  font-size: 1.25rem;
  font-weight: 700;

  &:hover {
    border-bottom: 5px solid #444444;
  }
`

const MainNav: React.FC<{}> = (props) => {
  const { children } = props

  return (
    <Nav>
      {children}
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
