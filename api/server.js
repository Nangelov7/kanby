const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 4000

// Database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify: false, useCreateIndex: true
})

// Server
app.listen(PORT, () => console.log(`API is running on port ${PORT}!`))