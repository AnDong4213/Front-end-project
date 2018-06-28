const Webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 9001,
	overlay: true,
	historyApiFallback: {
      rewrites: [
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
	hot: true,
	hotOnly: true
  },
  plugins: [
	new Webpack.HotModuleReplacementPlugin(),
	new Webpack.NamedModulesPlugin()
  ]
}