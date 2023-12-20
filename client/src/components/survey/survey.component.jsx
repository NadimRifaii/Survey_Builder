// component imports
// css imports
import Button from '../common/button/button.component';
import './survey.styles.css'
const Survey = ({ survey }) => {
  const { title, description, questions } = survey;
  console.log([title, description, questions])
  return (
    <div className="survey">
      <div className="survey-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="date-created">
        <span>Created at:</span>
        <span>10/10/2023</span>
      </div>
      <div className="survey-num-responses">
        <Button btnText={'Responses'} backgroundColor={'steelblue'} />
        <Button btnText={'Questions'} backgroundColor={'steelblue'} />
      </div>
    </div>
  )
}
export default Survey