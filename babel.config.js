module.exports = {
	presets: [
		['@babel/preset-env'],
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
			},
		],
	],
	plugins: [
		'@emotion',
		'@babel/plugin-transform-runtime',
		'babel-plugin-twin',
		'babel-plugin-macros',
	],
};
