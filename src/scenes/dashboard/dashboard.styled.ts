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
	// marginLeft: -20,
}));

export const TransactionsContainer = styled(Box)(
	({ backgroundColor }: BackgroundColorProp) => ({
		gridColumn: 'span 4',
		gridRow: 'span 2',
		overflow: 'auto',
		backgroundColor,
	})
);

export const TransactionsHeader = styled(Box)(({ colors }: ColorsProps) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: 15,
	color: colors.grey[100],
	borderBottom: `4px solid ${colors.primary[500]}`,
}));

export const Transaction = styled(Box)(({ borderColor }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: 15,
	borderBottom: `4px solid ${borderColor}`,
}));

export const TransactionCost = styled(Typography)(
	({ backgroundColor }: BackgroundColorProp) => ({
		padding: '5px 10px',
		borderRadius: 4,
		backgroundColor,
	})
);

export const ProgressCircleContainer = styled(Box)(
	({ backgroundColor }: BackgroundColorProp) => ({
		gridColumn: 'span 4',
		gridRow: 'span 2',
		padding: 30,
		backgroundColor,
	})
);

export const ProgressCircleWrapper = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: 25,
	gap: 15,
}));

export const BarChartContainer = styled(ProgressCircleContainer)(() => ({
	padding: '30px 10px',	
}));

export const BarChartWrapper = styled(Box)(() => ({
	height: 275,
	marginTop: -20,
}));

export const GeographyChartContainer = styled(ProgressCircleContainer)(
	() => ({})
);

export const GeographyChartWrapper = styled(Box)(() => ({
	height: 240,
}));
