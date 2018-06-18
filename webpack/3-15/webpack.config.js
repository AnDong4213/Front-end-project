let HTMLWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin  = require('clean-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let PurifyCSS = require('purifycss-webpack')
let glob = require('glob-all')
let Webpack = require('webpack')
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
							singleton: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							// minimize: true,
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
								modules: false,
								localIdentName: '[path][name]_[local]_[hash:base64:5]'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: [
									require('postcss-cssnext')()
								]
							}
						},
						{loader: 'less-loader'}
					]
				})
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[hash:base64:6]--[name].[ext]',
							outputPath: 'img',
							publicPath: '../dist/img'
							// useRelativePath: true
						}
					}
				]
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: ['lodash']
					}
				},
				exclude: '/node_modules/'
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
		}),
		new PurifyCSS({
			paths: glob.sync([
				path.join(__dirname, './*.html'),
				path.join(__dirname, './src/*.js')
			])
		}),
		new Webpack.optimize.UglifyJsPlugin()
	]

}
