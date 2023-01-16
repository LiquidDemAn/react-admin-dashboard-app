import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)({
	flex: '1 1 100%',
	marginLeft: 0,

	'@media(min-width: 768px)': {
		marginLeft: 15,
	},
});
