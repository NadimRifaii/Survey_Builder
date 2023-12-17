import { login, register } from '../controllers/auth.controller.mjs'
import express from 'express'
const authRouter = express.Router()
authRouter.post('/login', login)
authRouter.post('/register', register)
export default authRouter