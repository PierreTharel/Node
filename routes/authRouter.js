import {Router} from 'express'
import { registerUser, loginUser } from '../controllers/authController.js'
import { loginVerification } from '../middlewares/loginVerification.js'

const authRouter = Router()

authRouter.post('/register', registerUser)
authRouter.post('/login',loginVerification, loginUser)

export default authRouter