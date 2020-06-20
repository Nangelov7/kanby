const redis = require('async-redis')
require('dotenv').config()

const ENV = process.env.NODE_ENV
let REDIS_URI

if (ENV === 'development') {
	REDIS_URI = process.env.DEV_REDIS_URI
} else if (ENV === 'production') {
	REDIS_URI = process.env.PROD_REDIS_URI
}

let client = redis.createClient(REDIS_URI)
if(String(process.env.REDIS_PASSWORD) !== "") {
	client.auth(process.env.REDIS_PASSWORD)
}

module.exports = client