const mongoose = require('mongoose')
require('dotenv').config()

const ENV = process.env.NODE_ENV
let DB_URI

exports.init = () => {
	if (ENV === 'development') {
		DB_URI = process.env.DEV_DB_URI
	} else if (ENV === 'test') {
		DB_URI = process.env.TEST_DB_URI
	} else if (ENV === 'production') {
		DB_URI = process.env.PROD_DB_URI
	}

	// Database
	return mongoose.connect(DB_URI, {
		useNewUrlParser: true, useUnifiedTopology: true,
		useFindAndModify: false, useCreateIndex: true
	})
}