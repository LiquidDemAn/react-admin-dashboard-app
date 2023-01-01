import { Typography, useTheme } from '@mui/material';
import { colorsObject } from '../../theme/colors';
import { Container, Title } from './header.styled';

type Props = {
	title: string;
	subtitle?: string;
};

export const Header = ({ title, subtitle }: Props) => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	return (
		<Container>
			<Title variant='h2' color={colors.grey[100]}>
				{title}
			</Title>

			{subtitle && (
				<Typography variant='h5' color={colors.greenAccent[400]}>
					{subtitle}
				</Typography>
			)}
		</Container>
	);
};
