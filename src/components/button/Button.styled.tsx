import styled from '@emotion/styled';
import type { Color, Variant } from './Button';
import { getTheme } from './themes';

export const Button = styled.button<{ $color: Color; variant: Variant }>`
	${(props) => getTheme(props.$color, props.variant)}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.2;
	}
`;
