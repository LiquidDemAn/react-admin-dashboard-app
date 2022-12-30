import { styled } from '@mui/material/styles';
import { MenuItem } from 'react-pro-sidebar';

export const Item = styled(MenuItem)(({ active, color }) => ({
	a: {
		color: active ? '#6870fa' : color,
		backgroundColor: 'inherit !important',
	},

	'a:hover': {
		color: '#868dfb',
	},
}));
