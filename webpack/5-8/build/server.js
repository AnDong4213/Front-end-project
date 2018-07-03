const webpack = require('webpack')
const express = require('express')
const opn = require('opn')

const app = express()
const port = 9002

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const proxyMiddleware = require('http-proxy-middleware')
const historyApiFallback = require('connect-history-api-fallback')

const config = require('./webpack.common.conf.js')('development')
const compiler = webpack(config)

const proxyTable = require('./proxy.js')


for (let context in proxyTable) {
    app.use(proxyMiddleware(context, proxyTable[context]))
}

app.use(historyApiFallback(require('./historyfallback.js')))

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.listen(port, function () {
  console.log('服务运行在' + port + '端口')
  opn('http://localhost:' + port)
})

