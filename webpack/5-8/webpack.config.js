let Webpack = require('webpack')
let HTMLWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin  = require('clean-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let PurifyCSS = require('purifycss-webpack')
let HtmlInlineChunkPlugin = require('html-webpack-inline-chunk-plugin')

let glob = require('glob-all')
let path = require('path')

module.exports = {
	entry: {
		'app': './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'js/[name].bundle-[hash:5].js',
		chunkFilename: 'js/[name].bundle2.js'
	},
	// devtool: 'eval',
	// devtool: 'source-map', // 线上选择这个就可以了...
	devtool: 'cheap-module-source-map',  // 开发...
	devServer: {
		port: 9001,
		overlay: true,
		// inline: false,
		// historyApiFallback: true
		historyApiFallback: {
			rewrites: [
				// { from: '/pages/a', to: '/pages/a.html' }
				{
					from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
					to: function(context) {
						return '/' + context.match[1] + context.match[2] + '.html'
					}
				}
			]
		},
		proxy: {
			'/': {
				target: 'https://m.weibo.cn',
				changeOrigin: true,
				logLevel: 'debug',
				pathRewrite: {
					'^/comments': '/api/comments',
					'^/container': '/api/container'
				},
				headers: {
					'Cookie': ''
				}
			}
		},
		// clientLogLevel: 'none',
		hot: true,
		hotOnly: true
	},
	resolve: {
		/* alias: {
			jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js')
		} */
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
				use: [
					{
						loader: 'style-loader',
						options: {
							// singleton: true,  // 把css放在<style>标签中...
							sourceMap: true
						}
					},
					
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				use: [
					/*{
						loader: 'file-loader',
						options: {
							name: '[hash:base64:6]--[name].[ext]',
							outputPath: 'img',
							publicPath: '../dist/img'
							// useRelativePath: true
						}
					}*/
					{
						loader: 'url-loader',
						options: {
							limit: 2000,
							name: '[hash:base64:6]--[name].[ext]',
							outputPath: 'img/',
							publicPath: '../img'
						}
					},
					{
						loader: 'img-loader',
						options: {
							pngquant: {
								quality: 80
							}
						}
					}
				]
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
				include: [path.resolve(__dirname, 'src')],
				exclude: [
					'/node_modules/',
					path.resolve(__dirname, "src/libs")
				],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env'],
							plugins: ['lodash']
						}
					},
					{
						loader: 'eslint-loader',
						options: {
							formatter: require('eslint-friendly-formatter')
						}
					}
				]
			},
			/* {
				test: path.resolve(__dirname, 'src/app.js'),
				use: [
					{
						loader: 'imports-loader',
						options: {
							$: 'jquery'
						}
					}
				]
			}, */  //使用的是imports-loader来引入jquery,eslint会报错..  换用Webpack.ProvidePlugin来替换...
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
		

		
	]

}
