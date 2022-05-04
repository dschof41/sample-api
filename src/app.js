const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//middlewares
// errors

//routers

module.exports = app