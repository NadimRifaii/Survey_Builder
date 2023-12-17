import express from 'express'
import { createSurvey, assignSurvey, getAllSurveys, getUserSurveys } from '../controllers/survey.controller.mjs'
const surveyRouter = express.Router()
surveyRouter.post('/', createSurvey)
surveyRouter.get('/', getAllSurveys)
export default surveyRouter