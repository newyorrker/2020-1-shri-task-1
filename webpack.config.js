const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => ({
	entry: './src/js/main.js',
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: '[id].css',
			ignoreOrder: false
		})
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
					{
						loader: 'eslint-loader'
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	mode: env.development ? 'development' : 'production',
	devtool: env.development ? 'source-map' : 'none'
})
