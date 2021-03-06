let webpack = require('webpack')
let path = require('path')

module.exports = {
	entry: {
		'mindex': './src/mindex.js',
		'mindex2': './src/mindex2.js',
		'vendor': ['lodash', 'jquery']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',   //  不能省略...
			filename: 'common.js',  // 如果有生成common.js文件，没有的话生成common.bundle.js文件...
			minChunks:2,
			chunks: ['mindex', 'mindex2']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
			minChunks: Infinity
		})
	]
}
