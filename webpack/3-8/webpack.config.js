let HTMLWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin  = require('clean-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let path = require('path')

module.exports = {
	entry: {
		'app': './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle2.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							singleton: true,
							transform: './css.transform.js'
						}
					},
					{
						loader: 'css-loader',
						options: {
							minimize: true,
							modules: true,
							localIdentName: '[path][name]_[local]_[hash:base64:5]'
						}
					}
				]
			},
			{
				test: /\.less$/i,
				use: ExtractTextPlugin.extract({
					fallback: {
						loader: 'style-loader',
						options: {
							singleton: true
						}
					},
					use: [
						{
							loader: 'css-loader',
							options: {
								// minimize: true,
								modules: true,
								localIdentName: '[path][name]_[local]_[hash:base64:5]'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: [
									// require('autoprefixer')(),
									require('postcss-cssnext')()
								]
							}
						},
						{loader: 'less-loader'}
					]
				})
			}

		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HTMLWebpackPlugin({
			title: 'CSS',
			template: './index.html',
			filename: '../index1.html',
			meta: {
				viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
			},
			minify: {
				removeComments: true,
				collapseWhitespace: false
			}
		}),
		new ExtractTextPlugin({
			filename: '[name].min.css',
			allChunks: false
		})
	]

}
