const mongoose = require('mongoose')
require('dotenv').config()

// Database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify: false, useCreateIndex: true
})

module.exports = mongoose