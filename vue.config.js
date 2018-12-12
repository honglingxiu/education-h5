module.exports = {
	baseUrl: "./",
	productionSourceMap: false,
	chainWebpack: config => {
		config.plugins.delete('prefetch')
	},
	devServer: {
		port: 9000
	}
};