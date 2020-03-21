const app = require('./app')
const PORT = 4000

// Server
exports.server = app.listen(PORT, () => console.log(`API is running on port ${PORT}!`))