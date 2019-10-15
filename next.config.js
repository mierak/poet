const withImages = require('next-images');
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const darkTheme = require('@ant-design/dark-theme');
const path = require('path');
// const blue = require('@ant-design/colors');
// const red = require('@ant-design/colors');
// const gold = require('@ant-design/colors');
// const darkTheme = require('./pages/assets/darkTheme');

module.exports = withImages(
	withLess(
		withCss({
			// cssModules: true,
			lessLoaderOptions: {
				javascriptEnabled: true,
				modifyVars: darkTheme
			},
			exportPathMap: function() {
				return {
					'/': { page: '/' },
					'/flipper': { page: '/flipper' }
				};
			},
			webpack: config => {
				config.resolve.alias['store'] = path.join(__dirname, 'store');
				config.resolve.alias['util'] = path.join(__dirname, 'util');
				return config;
			}
		})
	)
);
