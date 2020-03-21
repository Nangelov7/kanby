const mongoose = require('mongoose')
require('dotenv').config()

const DB_HOST = 'db'
const DB_PORT = 27017
const DB_DATABASE = process.env.DB_DATABASE

// Database
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify: false, useCreateIndex: true
})

module.exports = mongoose