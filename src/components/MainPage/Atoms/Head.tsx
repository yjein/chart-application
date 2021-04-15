import styled from "styled-components"

const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #606060;
`

const Header: React.FC<{}> = (props) => {
  const { children } = props
  return <HeaderStyle>{children}</HeaderStyle>
}

export default Header
