import express from 'express'
import cors from 'cors'
import { router } from './routers/user.js'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
