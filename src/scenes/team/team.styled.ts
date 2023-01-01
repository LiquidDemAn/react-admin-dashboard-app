import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorsObjectType } from '../../theme/colors';

export const Container = styled(Box)({
	margin: 20,
});

export const TableWrapper = styled(Box)(
	({ colors }: { colors: ColorsObjectType }) => ({
		marginTop: 40,
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

export const AccessBlock = styled(Box)(
	({ colors, access }: { colors: ColorsObjectType; access: string }) => ({
		width: '60%',
		margin: '0 auto',
		padding: 5,
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 4,
		backgroundColor:
			access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700],
	})
);

export const AccessName = styled(Typography)({
	marginLeft: 5,
});
