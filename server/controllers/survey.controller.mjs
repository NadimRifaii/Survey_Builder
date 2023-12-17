import Survey from '../models/survey.model.mjs'
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
export async function assignSurvey(req, res) {

}
export async function getAllSurveys(req, res) {
  const surveys = await Survey.find()
  return res.status(200).json({ surveys })
}
export async function getUserSurveys(req, res) {

}