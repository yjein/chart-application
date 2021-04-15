import DashBord from "../Atoms/DashBord"
import Div from "../Atoms/Div"

const CreateDiv = () => {
  const CreateDiv = [12]
  return CreateDiv.map(() => <Div />)
}

const MainDashBord = () => {
  return <DashBord>{CreateDiv()}</DashBord>
}

export default MainDashBord
