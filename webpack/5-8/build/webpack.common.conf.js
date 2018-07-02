const productionConfig = require('./webpack.prod.conf.js')
const developmentConfig = require('./webpack.dev.conf.js')

const Webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const generateConfig = env => {
	
	const extractLess = new ExtractTextPlugin({
		filename: 'css/[name].[hash:5].min.css',
		allChunks: false
	})
	
	const scriptLoader = ['babel-loader'].concat(env === 'production' ? [] : [
		{
			loader: 'eslint-loader',
			options: {
				formatter: require('eslint-friendly-formatter')
			}
		}
	])
	
	const cssLoaders = [
		{
			loader: 'css-loader',
			options: {
				sourceMap: env === 'development',
				modules: false,
				localIdentName: '[path][name]_[local]_[hash:base64:5]'
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				sourceMap: env === 'development',
				plugins: [
					require('postcss-cssnext')()
				].concat(
				  env === 'production'
					? require('postcss-sprites')({
						spritePath: 'dist/img',
						retina: true
					})
					: []
				)
			}
		},
		{
			loader: 'less-loader',
			options: {
				sourceMap: env === 'development'
			}
		}
	]
	const styleLoader = env === 'production'
		? extractLess.extract({
			fallback: 'style-loader',
			use: cssLoaders
		})
		: [{
			loader: 'style-loader'
		}].concat(cssLoaders)
	
	const fileLoader = env === 'development'
	  ? [{
			loader: 'file-loader',
			options: {
				name: '[hash:base64:6]--[name].[ext]',
				outputPath: 'img',
				publicPath: '../img'
			}
		}]
		: [{
			loader: 'url-loader',
			options: {
				limit: 2000,
				name: '[hash:base64:6]--[name].[ext]',
				outputPath: 'img/',
				publicPath: '../img'
			}
		}]
	
	return {
		entry: {
			'app': './src/app.js'
		},
		output: {
			path: path.resolve(__dirname, '../dist'),
			publicPath: '/',
			filename: 'js/[name].bundle-[hash:5].js',
			chunkFilename: 'js/[name].bundle2.js'
		},
		resolve: {
			alias: {
				jquery$: path.resolve(__dirname, '../src/libs/jquery.min.js')
			}
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
					use: styleLoader
				},
				{
					test: /\.(png|jpg|jpeg|gif)$/i,
					use: fileLoader.concat(
						env === 'production'
						? [{
							loader: 'img-loader',
							options: {
								pngquant: {
									quality: 80
								}
							}
						}]
						: []
					)
				},
				{
					test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								name: '[name]-[hash:5].[ext]',
								limit: 5000,
								outputPath: 'fonts/',
								publicPath: '../fonts'
							}
						}
					]
				},
				{
					test: /\.js$/,
					include: [path.resolve(__dirname, '../src')],
					exclude: [
						'/node_modules/',
						path.resolve(__dirname, "../src/libs")
					],
					use: scriptLoader
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: 'html-loader',
							options: {
								attrs: ['img:src', 'img:data-src']
							}
						}
					]
				}
			]
		},
		plugins: [
			extractLess,
			new HTMLWebpackPlugin({
				title: 'webpack',
				filename: 'index.html',
				template: './index.html',
				meta: {
					viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
				},
				minify: {
					removeComments: true,
					collapseWhitespace: false
				}
			}),
			new Webpack.ProvidePlugin({
				$: 'jquery'
			})
			
		]
		
	}
}

module.exports = env => {
	let config = env === 'production' ? productionConfig : developmentConfig
	return merge(generateConfig(env), config)
}