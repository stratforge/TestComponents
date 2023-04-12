// import { css } from '@emotion/react';
import { css } from '@emotion/react';
import tw, { TwStyle } from 'twin.macro';
// import { rgba } from '@src/utils/rgba';
import type { Color, Variant } from './Button';

type ITheme = {
	outline: {
		base: TwStyle;
		error: TwStyle;
		success: TwStyle;
		warn: TwStyle;
		secondary: TwStyle;
		primary: TwStyle;
	};
	text: {
		base: TwStyle;
		error: TwStyle;
		success: TwStyle;
		warn: TwStyle;
		secondary: TwStyle;
		primary: TwStyle;
	};
	solid: {
		base: TwStyle;
		error: TwStyle;
		success: TwStyle;
		warn: TwStyle;
		secondary: TwStyle;
		primary: TwStyle;
	};
};

const theme: ITheme = {
	outline: {
		base: tw`rounded-md  px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`,
		error: tw`ring-red-300 hover:bg-red-50`,
		success: tw`ring-green-300 hover:bg-green-50`,
		warn: tw`ring-yellow-300 hover:bg-yellow-50`,
		secondary: tw`ring-gray-300 hover:bg-gray-50`,
		primary: tw`ring-blue-300 hover:bg-blue-50`,
	},
	text: {
		base: tw`rounded-md bg-transparent px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm dark:text-gray-100  ring-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/20 `,
		error: tw`dark:text-red-100  ring-red-300 hover:bg-red-50 dark:hover:bg-gray-800/20`,
		success: tw`dark:text-green-100  ring-green-300 hover:bg-green-50 dark:hover:bg-gray-800/20`,
		warn: tw`dark:text-yellow-100  ring-yellow-300 hover:bg-yellow-50 dark:hover:bg-gray-800/20`,
		secondary: tw`dark:text-gray-100  ring-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/20`,
		primary: tw`dark:text-blue-100  ring-blue-300 hover:bg-blue-50 dark:hover:bg-gray-800/20`,
	},
	solid: {
		base: tw`rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`,
		error: tw`bg-red-600 hover:bg-red-500 focus-visible:outline-red-600`,
		success: tw`bg-green-600 hover:bg-green-500 focus-visible:outline-green-600`,
		warn: tw`bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600`,
		secondary: tw`bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600`,
		primary: tw`bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600`,
	},
};

export function getTheme(color: Color, variant: Variant) {
	return css([theme[variant].base, theme[variant][color]]);
}
