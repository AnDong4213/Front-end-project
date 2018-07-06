const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin  = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/foo.js',
        vendor: ['react']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].[hash].js'
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedChunksPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ]
}


