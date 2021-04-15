import styled from "styled-components"

const LiStyle = styled.li`
  display: inline;
  margin-right: 2rem;
  font-size: 1.2rem;
  font-weight: 700;

  &:hover {
    border-bottom: solid 0.2rem #444444;
  }
`

const NavList: React.FC<{}> = (props) => {
  const { children } = props
  return <LiStyle>{children}</LiStyle>
}

export default NavList
