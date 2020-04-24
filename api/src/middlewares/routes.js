const express = require('express')
const app = express()

// Routes
const todoRoute = require('../routes/todo')
const doingRoute = require('../routes/doing')
const fixRoute = require('../routes/fix')
const testRoute = require('../routes/testing')
const doneRoute = require('../routes/done')

app.use('/', todoRoute)
app.use('/', doingRoute)
app.use('/', fixRoute)
app.use('/', testRoute)
app.use('/', doneRoute)
app.use('/', (req, res) => {
    res.status(404).json({error: 'Not found'})
})

module.exports = app