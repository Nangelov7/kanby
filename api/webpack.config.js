const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: 'production',
	target: 'node',
	externals: [nodeExternals()],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	entry: './src/server.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'api.js',
	},
}