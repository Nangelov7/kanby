const express = require('express')
const app = express()

// Routes
const backlogRoute = require('../routes/backlog')
const todoRoute = require('../routes/todo')
const doingRoute = require('../routes/doing')
const reviewRoute = require('../routes/review')
const doneRoute = require('../routes/done')

app.use('/', backlogRoute)
app.use('/', todoRoute)
app.use('/', doingRoute)
app.use('/', reviewRoute)
app.use('/', doneRoute)
app.use('/', (req, res) => {
    res.status(404).json({error: 'Not found'})
})

module.exports = app