let HTMLWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin  = require('clean-webpack-plugin')
let path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		'mindex': './src/mindex.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'  // 这里使用了 chunkFilename，它决定非入口 chunk 的名称。
	},
	optimization: {
		splitChunks: {
			chunks: 'initial',
      automaticNameDelimiter: '--',
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          priority: -10,
          enforce: true,
          reuseExistingChunk: true
				},
				default: {
            name: 'default',
            priority: -20,
            enforce: true,
            reuseExistingChunk: true
        }
			}
		},
		runtimeChunk: {
        name: 'manifest'
    }
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
