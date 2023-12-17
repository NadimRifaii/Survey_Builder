import UserSurvey from "../models/user-survey.model.mjs";
import User from "../models/user.model.mjs";
import Survey from "../models/survey.model.mjs";
export async function createUserSurvey(req, res) {
  const { surveyId } = req.body
  const userId = req.user._id
  if (!surveyId || !userId) {
    return res.status(500).json({ message: "Missing required parameters" })
  }
  try {
    const userExists = await User.findById(userId)
    const surveyExists = await Survey.findById(surveyId)
    if (!userExists || !surveyExists) {
      return res.status(404).json({ message: "User or Survey not found" })
    }
    const existingSurvey = await UserSurvey.findOne({ userId, surveyId })
    if (existingSurvey)
      return res.status(500).json({ message: "User has already taken this survey" })
    const newUserSurvey = new UserSurvey({
      userId,
      surveyId,
    })
    await newUserSurvey.save()
    return res.status(200).json({ newUserSurvey, surveyName: surveyExists.title })
  } catch (error) {
    return res.status(500).json({ error })
    console.log(error)
  }
} 