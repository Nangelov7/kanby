const app = require('./app')
require('./config/db')
const PORT = 4000

// Server
app.listen(PORT, () => console.log(`API is running on port ${PORT}!`))