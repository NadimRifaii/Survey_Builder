// hooks imports
import { useState } from "react"
// components imports
import Input from "../common/input/input.component"
import Options from "../options/options.component"
// css imports
import './question.styles.css'
const Question = ({ question }) => {
  const [quest, setQuestion] = useState(question)
  return (
    <div className="question">
      <Input info={{ type: 'text', placeholder: 'Enter question' }} question={quest} />
      <Options question={quest} />
    </div>
  )
}
export default Question