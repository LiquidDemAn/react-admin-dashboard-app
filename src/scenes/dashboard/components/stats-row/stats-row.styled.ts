import { DashboardGridContainer } from './../../dashboard.styled';
import { styled } from '@mui/material/styles';

export const StatsBoxContainer = styled(DashboardGridContainer)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	gridRow: 'auto',
	padding: 0,

	'@media(min-width: 992px)': {
		gridColumn: 'span 3',
	},
}));
