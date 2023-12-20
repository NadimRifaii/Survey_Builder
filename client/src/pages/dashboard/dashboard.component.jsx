// components imports
import Header from "../../components/common/header/header.component"
import SurveysContainer from "../../components/surveysContainer/surveys-container.component"
// css imports
import './dashboard.styles.css'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <SurveysContainer />
    </div>
  )
}
export default Dashboard