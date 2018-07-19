let Webpack = require('webpack')
let HTMLWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin  = require('clean-webpack-plugin')
let UglifyJs = require('uglifyjs-webpack-plugin')

let path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		'app': './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					{
						loader: 'babel-loader',
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			inject: true,
			template: path.resolve(__dirname, 'index.html')
		})
	],
	optimization: {
		// minimize: false
		minimizer: [
			/* new UglifyJs({
				cache: true,
				parallel: true,
				uglifyOptions: {
					ecma: 6,
					keep_classnames: true,
					keep_fnames: true
				}
			}) */
		],
		// runtimeChunk: true
		runtimeChunk: {
			name: 'manifest'
		},
		splitChunks: {
			name: true,
			minSize: 0,
			automaticNameDelimiter: '--',
			cacheGroups: {
				/* preact_a: {
					test: /(preact)|(lodash)/,
					chunks: 'initial'
				} */
				preact: {
					test: /preact/,
					// name: 'sss',  // 替换掉preact这个名字...
					chunks: 'initial'
				},
				lodash: {
					test: /lodash/,
					chunks: 'all'
				}
			}
		}
	}

}
