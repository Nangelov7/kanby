const express = require('express')
const app = express()
const middleware = require('./middlewares/middleware')
const routes = require('./middlewares/routes')

app.use(middleware)
app.use(routes)

module.exports = app