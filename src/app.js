import express from 'express'
import userRouter from '#src/user/router'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//middlewares
// errors

//routers
app.use('/user', userRouter)

export default app