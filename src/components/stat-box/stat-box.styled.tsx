import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FlexBox } from '../../global.styled';

export const Container = styled(Box)({
	width: '100%',
	margin: '0 30px',
});

export const ProgressWrapper = styled(FlexBox)({
	flexDirection: 'column',
	gap: 5,
});
