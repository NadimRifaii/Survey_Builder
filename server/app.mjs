import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.mjs'
const app = express()
dotenv.config()
app.use(express.json())
app.use('/auth', authRouter)
export default app