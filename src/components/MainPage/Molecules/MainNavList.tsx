import NavUl from "../Atoms/NavUl"
import NavList from "../Atoms/NavList"

const MainNavList = () => {
  return (
    <NavUl>
      <NavList>Home</NavList>
      <NavList>Charts</NavList>
      <NavList>Docs</NavList>
      <NavList>Contact</NavList>
    </NavUl>
  )
}

export default MainNavList
