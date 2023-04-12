const path = require('path');
module.exports = {
	webpackFinal: async (config) => {
		config.stats = 'errors-only';
		config.resolve.alias = {
			...config.resolve.alias,
			'@src': path.resolve(__dirname, '../src/'),
		};
		config.resolve.modules.push('src');
		return config;
	},
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	stories: [
		'../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
		'./**/__stories__/*.stories.@(js|jsx|ts|tsx|mdx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'storybook-addon-themes',
		'storybook-dark-mode',
	],
	features: {
		storyStoreV7: true,
	},
	// https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook-configuration
	// staticDirs: ['./public'],
	docs: {
		autodocs: true,
	},
	themes: {
		clearable: false,
		list: [
			{
				name: 'Light',
				class: [],
				color: '#ffffff',
				default: true,
			},
			{
				name: 'Dark',
				// The class dark will be added to the body tag
				class: ['dark'],
				color: '#000000',
			},
		],
	},
};
