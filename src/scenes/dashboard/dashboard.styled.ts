import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ContentBox } from '../../global.styled';

export const DashboardGridContainer = styled(Box)(
	({ backgroundColor }: { backgroundColor: string }) => ({
		gridColumn: 'span 12',
		gridRow: 'span 2',
		padding: '15px',
		backgroundColor,

		'@media(min-width: 768px)': {
			padding: '30px 10px',
			gridColumn: 'span 6',
		},

		'@media(min-width: 992px)': {
			gridColumn: 'span 4',
		},
	})
);

export const Main = styled(ContentBox)({
	display: 'grid',
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridAutoRows: '140px',
	gap: '20px',
	overflow: 'auto',
});
