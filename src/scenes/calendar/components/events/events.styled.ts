import { Box, List } from '@mui/material';
import { styled } from '@mui/material/styles';

type BackgroundProps = {
	backgroundColor: string;
};

export const Container = styled(Box)(
	({ backgroundColor }: BackgroundProps) => ({
		flex: '1 1 20%',
		height: '75vh',
		padding: 15,
		marginRight: 15,
		borderRadius: 4,
		backgroundColor,
		overflow: 'auto',
	})
);

export const Event = styled(List)(({ backgroundColor }: BackgroundProps) => ({
	margin: '10px 0',
	paddingLeft: 5,
	borderRadius: 2,
	overflow: 'auto',
	backgroundColor,
}));
