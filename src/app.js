import express from 'express'
import userRouter from '#src/user/router'
import { v4 as uuidv4 } from 'uuid'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//middlewares
app.use((req, res, next)=>{
    console.log(`addCorrelationId: start`)
   req.correlationId = uuidv4()
   res.append('correlationId', req.correlationId)
   console.log(`addCorrelationId: end - ${req.correlationId}`)
   next()
})
// errors
// app.use(errorHandler)

//routers
app.use('/user', userRouter)

export default app