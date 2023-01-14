import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MenuItem, Sidebar } from 'react-pro-sidebar';

export const ProSidebar = styled(Sidebar)(
	({ isSmall }: { isSmall?: boolean }) => ({
		border: 'none !important',
		width: `100% ${isSmall && '!important'} `,
	})
);

export const MenuButton = styled(MenuItem)({
	margin: '10px 0 20px 0',

	'a:hover': {
		backgroundColor: 'inherit',
	},
});

export const MenuHeader = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginLeft: 15,
});

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

export const UserName = styled(Typography)({
	fontWeight: 700,
	marginTop: 10,
});

export const MenuItemsTitle = styled(Typography)({
	margin: '15px 0 5px 20px',
});
