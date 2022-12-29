import { Box, InputBase, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorsObjectType } from '../../../theme/colors';

export const TopbarBox = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	padding: 10,
});

export const TopbarSearchBox = styled(Box)<{ colors: ColorsObjectType }>(
	(props) => ({
		display: 'flex',
		backgroundColor: props.colors.primary[400],
		borderRadius: 3,
	})
);

export const TopbarSearchInput = styled(InputBase)(() => ({
	flex: 1,
	marginLeft: 10,
}));

export const TopbarSearchButton = styled(IconButton)(() => ({
	padding: 5,
}));

export const TopbarIconsBox = styled(Box)(() => ({
	display: 'flex',
}));
