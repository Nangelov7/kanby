const path = require('path')

module.exports = {
	entry: './src/server.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	mode: 'production',
	target: 'node',
}