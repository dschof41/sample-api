// register and sequence middlewares here
import express from "express"
import userHandler from '#src/user/handler'
import validateRequest from '#src/common/validation/handler'

const userRouter = express.Router()

userRouter.get('/:userId', validateRequest, userHandler.getUser)

userRouter.post('/add', userHandler.addUser)

export default userRouter
