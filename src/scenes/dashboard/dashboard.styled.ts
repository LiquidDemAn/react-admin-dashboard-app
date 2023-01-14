import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorsObjectType } from '../../theme/colors';

type ColorsProps = {
	colors: ColorsObjectType;
};

type BackgroundColorProp = {
	backgroundColor: string;
};

export const HeaderWrapper = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

export const DownloadButton = styled(Button)(({ colors }: ColorsProps) => ({
	display: 'flex',
	gap: 10,
	padding: '10px 20px',
	fontSize: '14px',
	fontWeight: 700,
	backgroundColor: colors.blueAccent[700],
	color: colors.grey[100],
}));

export const Main = styled('main')(() => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridAutoRows: '140px',
	gap: '20px',
}));

export const DashboardStatsBox = styled(Box)(
	({ backgroundColor }: BackgroundColorProp) => ({
		gridColumn: 'span 3',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor,
	})
);

export const LineChartContainer = styled(Box)(
	({ backgroundColor }: BackgroundColorProp) => ({
		gridColumn: 'span 8',
		gridRow: 'span 2',
		backgroundColor,
	})
);

export const LineChartHeader = styled(Box)(() => ({
	marginTop: 25,
	padding: '0 30px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

export const LineChartWrapper = styled(Box)(() => ({
	height: 250,
	marginLeft: -20,
}));
