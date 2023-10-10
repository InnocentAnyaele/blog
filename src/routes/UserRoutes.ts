import express from 'express'
import { checkIfSignUpBodyEmpty } from '../middleware/userMiddleware'
const router = express.Router()
const UserController = require('../controller/UserController')

router.post('/signUp', checkIfSignUpBodyEmpty, UserController.signUp)

router.post('/signIn', UserController.signIn)

export default router