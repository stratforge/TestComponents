import { css, CSSObject, Global } from '@emotion/react';
import tw, { globalStyles, theme } from 'twin.macro';

const GlobalStyles = css({
	body: {
		WebkitTapHighlightColor: theme`colors.purple.500`,
		...tw`antialiased`,
	},
	...(globalStyles as CSSObject),
});

export default <Global styles={GlobalStyles} />;
