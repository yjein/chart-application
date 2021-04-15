import styled from "styled-components"

const NavStyle = styled.nav`
  height: 2rem;
  background-color: #dbdbdb;
`

const NavBar: React.FC<{}> = (props) => {
  const { children } = props
  return <NavStyle>{children}</NavStyle>
}

export default NavBar
