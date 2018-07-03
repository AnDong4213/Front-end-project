let webpack = require('webpack')
let path = require('path')

let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	entry: {
		'mindex': './src/mindex.js',
		'mindex2': './src/mindex2.js',
		'vendor': ['lodash', 'jquery']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'  // 这里使用了 chunkFilename，它决定非入口 chunk 的名称。
	},
	plugins: [
	  new BundleAnalyzerPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'mindex',  //必须是entry里的入口string 生成 2.js 文件...
			async: true,
			// async: 'async-common',  // 生成了 async-common-mindex.chunk.js 文件...
			children: true,
			minChunks: 2
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
			minChunks: Infinity
		})
	]

}
