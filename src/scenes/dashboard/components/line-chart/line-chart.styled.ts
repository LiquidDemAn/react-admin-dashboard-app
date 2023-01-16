import { DashboardGridContainer } from './../../dashboard.styled';
import { styled } from '@mui/material/styles';
import { FlexBox } from '../../../../global.styled';
import { Box } from '@mui/material';

export const Container = styled(DashboardGridContainer)({
	padding: 0,

	'@media(min-width: 768px)': {
		gridColumn: 'span 12',
		padding: 0,
	},

	'@media(min-width: 992px)': {
		gridColumn: 'span 8',
	},
});

export const Header = styled(FlexBox)({
	marginTop: 25,
	padding: '0 30px',
});

export const Wrapper = styled(Box)({
	height: 250,
});
