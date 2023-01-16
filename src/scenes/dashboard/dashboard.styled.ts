import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ContentBox } from '../../global.styled';
import { ColorsObjectType } from '../../theme/colors';

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

export const DownloadButton = styled(Button)(
	({ colors }: { colors: ColorsObjectType }) => ({
		display: 'flex',
		gap: 10,
		padding: '10px 20px',
		fontSize: '14px',
		fontWeight: 700,
		backgroundColor: colors.blueAccent[700],
		color: colors.grey[100],
	})
);

export const Main = styled(ContentBox)({
	display: 'grid',
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridAutoRows: '140px',
	gap: '20px',
	overflow: 'auto',
});
