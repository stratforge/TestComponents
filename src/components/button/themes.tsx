// import { css } from '@emotion/react';
import tw from 'twin.macro';
// import { rgba } from '@src/utils/rgba';
// import {
// 	ERROR,
// 	PRIMARY,
// 	SECONDARY,
// 	SUCCESS,
// 	WARN,
// 	WHITE,
// } from '@src/constants/colors';
import type { Color, Variant } from './Button';

// function getColorScheme(color: Color) {
// 	switch (color) {
// 		case 'error':
// 			return ERROR;
// 		case 'success':
// 			return SUCCESS;
// 		case 'warn':
// 			return WARN;
// 		case 'secondary':
// 			return SECONDARY;
// 		case 'primary':
// 		default:
// 			return PRIMARY;
// 	}
// }

export function getTheme(color: Color, variant: Variant) {
	// const colorScheme = getColorScheme(color);
	switch (variant) {
		case 'outline':
			return tw`rounded bg-indigo-50 dark:bg-indigo-800 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100`;
		case 'text':
			return tw`rounded bg-indigo-50 dark:bg-indigo-800 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100`;
		case 'solid':
		default:
			return tw`rounded bg-indigo-50 dark:bg-indigo-800 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100`;
	}
}
