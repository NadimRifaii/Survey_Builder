import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.mjs'
import surveyRouter from './routes/survey.route.mjs'
import { authMiddleware } from './middlewares/auth.middleware.mjs'
const app = express()
dotenv.config()
app.use(express.json())
app.use('/auth', authRouter)
app.use('/survey', authMiddleware, surveyRouter)
export default app