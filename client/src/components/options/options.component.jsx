// hooks imports 
import { useState } from "react"
const Options = ({ question }) => {
  const [option, setOption] = useState('text')
  question.questionType = option;

  return (
    <select onChange={(e) => {
      setOption(e.target.value)
    }} >
      <option value="text">text</option>
      <option value="radio">Radio button</option>
      <option value="Checkbox">Checkbox</option>
    </select>
  )
}
export default Options