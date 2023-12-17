import mongoose from 'mongoose'
const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  questions: [{
    "question": {
      type: String,
      required: true
    },
    questionType: {
      type: String,
      required: true
    },
    "options": [
      {
        "value": String,
      }
    ],
    answers: [String]
  }]
}, {
  timestamps: true
})
const Survey = mongoose.model('Survey', surveySchema)
export default Survey