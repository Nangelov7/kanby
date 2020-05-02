const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

// Middleware
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app