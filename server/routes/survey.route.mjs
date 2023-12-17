import express from 'express'
import { createSurvey, getAllSurveys, getUserSurveys } from '../controllers/survey.controller.mjs'
import { createUserSurvey } from '../controllers/user-survey.controller.mjs'
const surveyRouter = express.Router()
surveyRouter.post('/', createSurvey)
surveyRouter.get('/', getAllSurveys)
surveyRouter.post('/assignSurvey', createUserSurvey)
surveyRouter.get('/userSurveys', getUserSurveys)
export default surveyRouter