const express = require('express')
const app = express()
const routes = require('./middleware/routes')
const middleware = require('./middleware/middleware')

app.use(routes)
app.use(middleware)

module.exports = app