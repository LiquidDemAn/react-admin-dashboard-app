import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorsObjectType } from '../../theme/colors';

type ColorsProps = {
	colors: ColorsObjectType;
};

type DashboardStatsBoxProps = {
	backgroundColor: string;
};

export const HeaderWrapper = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

export const DownloadButton = styled(Button)(({ colors }: ColorsProps) => ({
	fontSize: '14px',
	fontWeight: 700,
	padding: '10px 20px',
	backgroundColor: colors.blueAccent[700],
	color: colors.grey[100],

	'& svg': {
		marginRight: '10px',
	},
}));

export const Main = styled('main')(() => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridAutoRows: '140px',
	gap: '20px',
}));

export const DashboardStatsBox = styled(Box)(
	({ backgroundColor }: DashboardStatsBoxProps) => ({
		gridColumn: 'span 3',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor,
	})
);
