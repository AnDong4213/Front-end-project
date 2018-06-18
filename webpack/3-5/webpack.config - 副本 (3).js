let webpack = require('webpack')
let path = require('path')

module.exports = {
	entry: {
		'pageA': './src/pageA.js',
		'pageB': './src/pageB.js',
		// 'vendor': ['lodash']
		'vendor1': ['lodash']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor1',
			minChunks: Infinity
		}),
		new webpack.optimize.CommonsChunkPlugin({
			// name: 'manifest',
			name: 'haha',
			minChunks: Infinity
		})
	]
}
