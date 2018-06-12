module.exports = {
	entry: {
		app: './app.js'
	},
	output: {
		filename: '[name].[hash:8].js'
	},
	
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				/* use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['env', {
								'targets': {
									browsers: ['> 1%', 'last 2 versions']
									// "chrome": 52
								}
							}]
						]
					}
				}, */
				exclude: '/node_modules/'
			}
		]
	}
	
}