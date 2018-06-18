let webpack = require('webpack')
let path = require('path')

module.exports = {
	entry: {
		'pageA': './src/pageA.js',
		'pageB': './src/pageB.js',
		'vendor': ['lodash']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			minChunks:2,
			chunks: ['pageA', 'pageB']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],  // 只有name不同，可以合并来写,同时把name改为names...
			minChunks: Infinity
		}),
		/*new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		})*/
	]
}
