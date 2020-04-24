const app = require('./app')
const db = require('./config/db')
const PORT = 4000

// Database
db.init()

// Server
app.listen(PORT, () => console.log(`API is running on port ${PORT}!`))