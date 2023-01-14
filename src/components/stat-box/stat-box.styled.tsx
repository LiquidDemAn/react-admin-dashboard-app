import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(() => ({
	width: '100%',
	margin: '0 30px',
}));

export const Wrapper = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

export const ProgressWrapper = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 5,
}));
