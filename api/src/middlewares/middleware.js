const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../../public')))

module.exports = app