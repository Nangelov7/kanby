const express = require('express')
const app = express()

// Routes
const todoRoute = require('../routes/todo')
const buildRoute = require('../routes/build')
const testRoute = require('../routes/testing')
const doneRoute = require('../routes/done')
const fixRoute = require('../routes/fix')

app.use('/', todoRoute)
app.use('/', buildRoute)
app.use('/', testRoute)
app.use('/', doneRoute)
app.use('/', fixRoute)
app.use('/', (req, res, next) => {
    res.status(404).json({error: 'Not found'})
})

module.exports = app