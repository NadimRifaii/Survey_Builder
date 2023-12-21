// components imports
import Header from "../../components/common/header/header.component"
import SurveysContainer from "../../components/surveysContainer/surveys-container.component"
// css imports
import './dashboard.styles.css'
// hooks imports
import { Outlet } from "react-router-dom"
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Outlet />
    </div>
  )
}
export default Dashboard