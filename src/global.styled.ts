import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorsObjectType } from './theme/colors';

export const PageContainer = styled(Box)({
	margin: 20,
});

export const TableComponent = styled(Box)(
	({ colors }: { colors: ColorsObjectType }) => ({
		marginTop: 25,
		height: '75vh',

		'& .MuiDataGrid-root': {
			border: 'none',
		},

		'& .MuiDataGrid-cell': {
			borderBottom: 'none',
		},

		'& .name-column--cell': {
			color: colors.greenAccent[300],
		},

		'& .MuiDataGrid-columnHeaders': {
			backgroundColor: colors.blueAccent[700],
			borderBottom: 'none',
		},

		'& .MuiDataGrid-virtualScroller': {
			backgroundColor: colors.primary[400],
		},

		'& .MuiDataGrid-footerContainer': {
			borderTop: 'none',
			backgroundColor: colors.blueAccent[700],
		},
	})
);

export const ContentBox = styled(Box)(({ borderColor }) => ({
	height: '75vh',
	border: borderColor ? `1px solid ${borderColor}` : '',
	borderRadius: '4px',
}));

export const FlexBox = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});
