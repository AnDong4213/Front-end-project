let Webpack = require('webpack')
let CleanWebpackPlugin  = require('clean-webpack-plugin')
let PurifyCSS = require('purifycss-webpack')
let HtmlInlineChunkPlugin = require('html-webpack-inline-chunk-plugin')

let path = require('path')
let glob = require('glob-all')

module.exports = {
  plugins: [
    new CleanWebpackPlugin(['dist']),

	new PurifyCSS({
	  paths: glob.sync([
	    path.join(__dirname, './*.html'),
	    path.join(__dirname, './src/*.js')
	  ])
	}),
	
	new Webpack.optimize.CommonsChunkPlugin({
	  name: 'manifest'
	}),
	
	new HtmlInlineChunkPlugin({
	  inlineChunks: ['manifest']
	}),
		
	new Webpack.optimize.UglifyJsPlugin(),
  ]
}