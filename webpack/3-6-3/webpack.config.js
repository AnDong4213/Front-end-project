let HTMLWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin  = require('clean-webpack-plugin')
let path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		'mindex': './src/mindex.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'  // 这里使用了 chunkFilename，它决定非入口 chunk 的名称。
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HTMLWebpackPlugin({
			title: 'Code Splitting',
			filename: '../index.html',
			meta: {
				viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
			},
			minify: {
				removeComments: true,
				collapseWhitespace: false
			}
		})
	]

}
