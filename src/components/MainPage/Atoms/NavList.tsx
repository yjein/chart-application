import styled from "styled-components"

const LiStyle = styled.li`
  display: inline;
  padding-right: 2rem;
`

const NavList: React.FC<{}> = (props) => {
  const { children } = props
  return <LiStyle>{children}</LiStyle>
}

export default NavList
