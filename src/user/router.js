// register and sequence middlewares here
import express from "express"
import userHandler from '#src/user/handler'

const userRouter = express.Router()

// userRouter.post('/', authenticate, validate('user'), userHandler.addUser )

userRouter.get('/:userId', userHandler.getUser)

userRouter.post('/add', userHandler.addUser)

export default userRouter
