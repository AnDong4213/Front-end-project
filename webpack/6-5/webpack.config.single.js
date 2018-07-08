const Webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')

const path = require('path')

const baseConfig = {
    entry: {
        react: ['react']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
        new ExtractTextPlugin({
            filename: 'css/[name].[hash:5].css'
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'react',
            minChunks: Infinity
        })
    ]
}

const generatePage = function ({
    title = '',
    entry = '',
    template = './src/index.html',
    name = '',
    chunks = []
} = {}) {
    return {
        entry,
        plugins: [
            new HTMLWebpackPlugin({
                chunks,
                template,
                title,
                filename: name + '.html'
            })
        ]
    }
}

const pages = [
    generatePage({
        title: 'page A',
        entry: {
            a: './src/pages/a.js'
        },
        name: 'a',
        chunks: ['react', 'a']
    }),

    generatePage({
        title: 'page B',
        entry: {
            b: './src/pages/b.js'
        },
        name: 'b',
        chunks: ['react', 'b']
    }),

    generatePage({
        title: 'page C',
        entry: {
            c: './src/pages/c.js'
        },
        name: 'c',
        chunks: ['react', 'c']
    })

]

// console.log(pages.map(page => merge(baseConfig, page)))
// module.exports = pages.map(page => merge(baseConfig, page))

console.log(merge([...[baseConfig], ...pages]))
module.exports = merge([...[baseConfig], ...pages])


