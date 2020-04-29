const express = require('express')
const app = express()
const helmet = require('helmet')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

// Middleware
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../../public')))

module.exports = app