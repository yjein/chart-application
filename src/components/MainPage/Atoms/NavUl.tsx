import styled from "styled-components"

const UlStyle = styled.ul`
  margin-top: 0.3rem;
`

const NavUl: React.FC<{}> = (props) => {
  const { children } = props
  return <UlStyle>{children}</UlStyle>
}

export default NavUl