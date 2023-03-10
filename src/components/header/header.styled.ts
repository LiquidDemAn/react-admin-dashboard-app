import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)({
	marginBottom: 15,

	'@media(min-width: 768px)': {
		marginBottom: 30,
	},
});

export const Title = styled(Typography)({
	textTransform: 'uppercase',
	fontWeight: 700,
	marginBottom: 5,
});
