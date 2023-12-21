import Survey from '../models/survey.model.mjs'
import UserSurvey from '../models/user-survey.model.mjs'
export async function createSurvey(req, res) {
  if (req.user.role != 'admin')
    return res.status(403).json({ message: "Your are not authorized to do this action" })
  const { title, description, questions } = req.body
  try {
    let survey = await Survey.findOne({ title })
    if (survey) {
      return res.status(500).json({ message: "This survey title already exists" })
    }
    survey = new Survey({
      title,
      description,
      questions
    })
    await survey.save()
    return res.status(200).json({ survey })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
export async function getAllSurveys(req, res) {
  const surveys = await Survey.find()
  return res.status(200).json({ surveys })
}
export async function getUserSurveys(req, res) {
  const userId = req.user._id;
  const userSurveys = await UserSurvey.find({ userId })
  const surveys = []
  for (let userSurvey of userSurveys) {
    const survey = await Survey.findOne({ _id: userSurvey.surveyId })
    surveys.push(survey)
    break;
  }
  const firstSurvey = surveys[0]
  const questions = surveys[0].questions
  questions.push({
    "question": "Second question",
    "questionType": "text",
    "options": [],
    "answers": [
      "answer 1"
    ]
  })
  return res.status(200).json({ firstSurvey, questions })
}

/**
 * The populate('surveyId') function in Mongoose is used for populating the data inside the reference1.
 *  In MongoDB, population is the process of replacing the specified path in the document of one collection
 *  with the actual document from the other collection1
 */