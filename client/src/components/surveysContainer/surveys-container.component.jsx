// components imports
import Survey from "../survey/survey.component"
// hooks imports
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
// functions imports
import { extractSurveysSlice, setSurveys } from "../../core/redux/surveys/surveysSlice"
import { request } from "../../core/axios/axios"
// css imports
import './surveys-container.styles.css'
const SurveysContainer = () => {
  const { surveys } = useSelector(extractSurveysSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    async function getSurveys() {
      try {
        let headers = {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        const surveys = await request('survey', 'GET', {}, headers)
        dispatch(setSurveys(surveys))
      } catch (error) {
        console.log(error)
      }
    }
    getSurveys()
  }, [])
  return (
    <div className="surveys-container">
      {
        surveys.length > 0 && surveys.map(survey => {
          return <Survey key={survey._id} survey={survey} />
        })
      }
    </div>
  )
}
export default SurveysContainer