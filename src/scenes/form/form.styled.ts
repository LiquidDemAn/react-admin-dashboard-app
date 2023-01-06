import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(() => ({
	margin: 20,
}));

export const FormInner = styled(Box)(() => ({
	display: 'grid',
	gap: 30,
	gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
}));

export const FormInput = styled(TextField)(
	({ column }: { column?: number }) => ({
		gridColumn: 'span 4',

		'@media (min-width:600px)': {
			gridColumn: `span ${column ? column : 4}}`,
		},
	})
);

export const ButtonContainer = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'end',
	marginTop: 20,
}));
