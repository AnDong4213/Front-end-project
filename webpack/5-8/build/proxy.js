module.exports = {
    '/.+': {
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
}