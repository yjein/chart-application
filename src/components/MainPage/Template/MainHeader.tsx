import Header from "../Atoms/Head"
import MainLogo from "../Organism/MainLogo"
import MainNavBar from "../Organism/MainNavBar"

const MainHeader = () => {
  return (
    <Header>
      <MainLogo />
      <MainNavBar />
    </Header>
  )
}

export default MainHeader
