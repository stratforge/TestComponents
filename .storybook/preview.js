import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	darkMode: {
		darkClass: 'dark',
		lightClass: 'light',
		classTarget: 'html',
		stylePreview: true,
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: ['Overview', 'Components'],
		},
	},
};
