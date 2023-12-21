// hooks imports
import { useState } from 'react'
// css imports
import './input.styles.css'
const Input = ({ info, question = '' }) => {
  const [value, setValue] = useState(info.value ? info.value : '')
  return (
    <div className="input-holder">
      <input {...info} value={value} onChange={(e) => {
        setValue(e.target.value)
        if (typeof question != 'string') {
          question.question = e.target.value
        }
      }} />
    </div>
  )
}
export default Input