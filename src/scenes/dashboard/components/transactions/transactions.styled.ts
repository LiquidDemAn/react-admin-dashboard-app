import { DashboardGridContainer } from './../../dashboard.styled';
import { styled } from '@mui/material/styles';
import { FlexBox } from '../../../../global.styled';
import { Typography } from '@mui/material';
import { ColorsObjectType } from '../../../../theme/colors';

export const Container = styled(DashboardGridContainer)({
	overflow: 'auto',
	padding: 0,

	'@media(min-width: 768px)': {
		padding: 0,
	},
});

export const Header = styled(FlexBox)(
	({ colors }: { colors: ColorsObjectType }) => ({
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
	({ backgroundColor }: { backgroundColor: string }) => ({
		padding: '5px 10px',
		borderRadius: 4,
		backgroundColor,
	})
);
