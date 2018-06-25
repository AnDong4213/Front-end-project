module.exports = {
  root: true,
  extends: 'standard',
  plugins: [
    'html'
  ],
  env: {
    browser: true,
    node: true
  },
	globals: {
		$: true
	},
  rules: {
    // 'eol-last': ['error', 'never']
  }
}
