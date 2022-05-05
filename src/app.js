import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//middlewares
// errors

//routers

export default app