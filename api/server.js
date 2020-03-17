const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT || 4000

// Server
exports.server = app.listen(PORT, () => console.log(`API is running on port ${PORT}!`))