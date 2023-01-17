import { InputBase, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FlexBox } from '../../../global.styled';
import { ColorsObjectType } from '../../../theme/colors';

export const TopbarContainer = styled(FlexBox)({
	padding: 10,
});

export const TopbarSearchBox = styled(FlexBox)(
	({ colors }: { colors: ColorsObjectType }) => ({
		backgroundColor: colors.primary[400],
		borderRadius: 3,
	})
);

export const TopbarSearchInput = styled(InputBase)({
	flex: 1,
	marginLeft: 10,
});

export const TopbarSearchButton = styled(IconButton)({
	padding: 5,
});
