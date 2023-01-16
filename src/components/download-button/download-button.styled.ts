import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

type Props = {
	textColor: string;
	backgroundColor: string;
};

export const StyledButton = styled(Button)(
	({ textColor, backgroundColor }: Props) => ({
		display: 'flex',
		gap: 10,
		padding: '10px 20px',
		fontSize: '14px',
		fontWeight: 700,
		color: textColor,
		backgroundColor,
	})
);
