import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ContentBox, FlexBox } from '../../global.styled';
import { ColorsObjectType } from '../../theme/colors';

type ColorsProps = {
	colors: ColorsObjectType;
};

type BackgroundColorProp = {
	backgroundColor: string;
};

const GridContainer = styled(Box)(
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

export const Main = styled(ContentBox)(() => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridAutoRows: '140px',
	gap: '20px',
	overflow: 'auto',
}));

export const DashboardStatsBox = styled(GridContainer)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	gridRow: 'auto',
	padding: 0,

	'@media(min-width: 992px)': {
		gridColumn: 'span 3',
	},
}));

export const LineChartContainer = styled(GridContainer)(() => ({
	padding: 0,

	'@media(min-width: 768px)': {
		gridColumn: 'span 12',
		padding: 0,
	},

	'@media(min-width: 992px)': {
		gridColumn: 'span 8',
	},
}));

export const LineChartHeader = styled(FlexBox)(() => ({
	marginTop: 25,
	padding: '0 30px',
}));

export const LineChartWrapper = styled(Box)(() => ({
	height: 250,
}));

export const TransactionsContainer = styled(GridContainer)(() => ({
	overflow: 'auto',
	padding: 0,

	'@media(min-width: 768px)': {
		padding: 0,
	},
}));

export const TransactionsHeader = styled(FlexBox)(
	({ colors }: ColorsProps) => ({
		padding: 15,
		color: colors.grey[100],
		borderBottom: `4px solid ${colors.primary[500]}`,
	})
);

export const Transaction = styled(FlexBox)(({ borderColor }) => ({
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

export const ProgressCircleContainer = styled(GridContainer)(() => ({}));

export const ProgressCircleWrapper = styled(FlexBox)(() => ({
	flexDirection: 'column',
	textAlign: 'center',
	marginTop: 25,
	gap: 15,
}));

export const BarChartContainer = styled(GridContainer)(() => ({}));

export const BarChartWrapper = styled(Box)(() => ({
	height: 275,
	marginTop: -20,
}));

export const GeographyChartContainer = styled(GridContainer)(() => ({}));

export const GeographyChartWrapper = styled(Box)(() => ({
	height: 240,
}));
