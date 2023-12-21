// hooks imports
import { useState, useEffect } from "react"
// components imports
import Input from "../common/input/input.component"
import Button from '../common/button/button.component'
import Question from "../question/question.component.jsx"
// css imports
import './create-survey.styles.css'
// functions imports
import { request } from '../../core/axios/axios.js'

const CreateSurvey = () => {
  const [questions, setQuestions] = useState([])
  console.log(questions)
  const addQuestion = () => {
    setQuestions([...questions, {
      "question": "",
      "questionType": "",
      "options": [],
      "answers": [
      ],
    }
    ])
  }
  const deleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  }

  return (
    <div className="container">
      <div className="survey-title">
        <Input info={{ type: 'text', name: 'title', value: 'Survey title' }} />
        <Input info={{ type: 'text', name: 'title', placeholder: "Description" }} />
      </div>
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
      <Button btnText={'Add question'} backgroundColor={'red'} onClick={addQuestion} />
      <br />
      <Button btnText={'Delete question'} backgroundColor={'red'} onClick={deleteQuestion} />
      <br />
      <Button btnText={'Show questions'} onClick={() => {
        console.log(questions)
      }} />
      <br />
    </div>
  )
}

export default CreateSurvey
