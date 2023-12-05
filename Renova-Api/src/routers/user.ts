import { Router } from 'express'
import { alreadyIn, contentNew, getNewParams, getNews, signIn, singUp } from '../controllers/user.js'
import { validateFields } from '../middleware/validateFields.js'
import { loginSchema, registerSchema } from '../Schema/User.js'
import { validatingToken } from '../middleware/token.js'

export const router = Router()

router.post('/cadastrar',validateFields(registerSchema), singUp)
router.post('/login', validateFields(loginSchema), signIn)
router.get('/usuario', validatingToken, alreadyIn)

router.post('/login/newForm', validatingToken, contentNew)
router.get('/news', getNews)
router.get('/news/:id', getNewParams)
