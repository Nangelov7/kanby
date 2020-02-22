const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

// Routes
const todoRoute = require('./routes/todo')
const buildRoute = require('./routes/build')
const testRoute = require('./routes/testing')
const doneRoute = require('./routes/done')
const fixRoute = require('./routes/fix')

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/todo', todoRoute)
app.use('/build', buildRoute)
app.use('/test', testRoute)
app.use('/done', doneRoute)
app.use('/fix', fixRoute)
app.use((req, res, next) => {
    res.status(404).json('Not found')
})

module.exports = app
