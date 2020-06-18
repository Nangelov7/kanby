const redis = require('async-redis')
require('dotenv').config()

module.exports = redis.createClient(process.env.REDIS_URL)