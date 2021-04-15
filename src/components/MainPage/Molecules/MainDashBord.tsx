import DashBord from "../Atoms/DashBord"
import Div from "../Atoms/Div"

const CreateDiv = (length: number) => {
  const CreateDiv = []
  for (let i = 0; i < length; i++) {
    CreateDiv.push(<Div />)
  }
  return CreateDiv
}

const MainDashBord = () => {
  return <DashBord>{CreateDiv(12)}</DashBord>
}

export default MainDashBord
