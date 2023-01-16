import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorsObjectType } from '../../theme/colors';

export const AccessBlock = styled(Box)(
	({
		colors,
		access,
		isMd,
	}: {
		colors: ColorsObjectType;
		access: string;
		isMd: boolean;
	}) => ({
		width: '60%',
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
