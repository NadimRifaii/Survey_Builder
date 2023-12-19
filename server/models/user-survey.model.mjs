import mongoose from 'mongoose'
const userSurveySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true
  },
  completedAt: Date,
  answers: [
    {
      question: {
        type: String
      },
      answers: [String]
    }
  ]
})
const UserSurvey = mongoose.model('UserSurvey', userSurveySchema)
export default UserSurvey
