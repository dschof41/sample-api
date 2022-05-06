// register and sequence middlewares here
import express from "express"
import userHandler from '#src/user/handler'

const userRouter = express.Router()

// userRouter.post('/', authenticate, validate('user'), userHandler.addUser )

userRouter.get('/:userId', userHandler.getUser)

export default userRouter
