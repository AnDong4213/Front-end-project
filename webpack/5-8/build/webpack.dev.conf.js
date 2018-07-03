const Webpack = require('webpack')
const proxy = require('./proxy.js')
const historyApiFallback = require('./historyfallback.js')

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 9001,
		overlay: true,
		historyApiFallback: historyApiFallback,
		proxy: proxy,
		hot: true,
		hotOnly: true
  },
  plugins: [
	new Webpack.HotModuleReplacementPlugin(),
	new Webpack.NamedModulesPlugin()
  ]
}