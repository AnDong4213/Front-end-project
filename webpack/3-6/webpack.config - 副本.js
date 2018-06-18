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
		publicPath: './dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'  // 这里使用了 chunkFilename，它决定非入口 chunk 的名称。
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			async: 'async-common',
			children: true,
			minChunks: 2
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
			minChunks: Infinity
		})
	]

}
