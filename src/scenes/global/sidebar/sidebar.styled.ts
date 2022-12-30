import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { ColorsObjectType } from '../../../theme/colors';

export const MenuButton = styled(MenuItem)<{ colors: ColorsObjectType }>(
	(props) => ({
		margin: '10px 0 20px 0',
		color: props.colors.grey[100],
	})
);

export const MenuHeader = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginLeft: 15,
});

export const MenuTitle = styled(Typography)<{
	colors: ColorsObjectType;
}>((props) => ({
	color: props.colors.grey[100],
}));

export const User = styled(Box)({
	marginBottom: 25,
});

export const UserImgWrapper = styled(Box)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

export const UserImg = styled('img')({
	width: 100,
	height: 100,
	cursor: 'pointer',
	borderRadius: '50%',
});

export const UserTitle = styled(Box)({
	textAlign: 'center',
});

export const UserName = styled(Typography)<{
	colors: ColorsObjectType;
}>((props) => ({
	color: props.colors.grey[100],
	fontWeight: 700,
	marginTop: 10,
}));

export const UserPosition = styled(Typography)<{
	colors: ColorsObjectType;
}>((props) => ({
	color: props.colors.greenAccent[500],
}));
