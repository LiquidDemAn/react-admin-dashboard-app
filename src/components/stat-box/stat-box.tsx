import { Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactElement } from 'react';
import { colorsObject } from '../../theme/colors';
import { ProgressCircle } from '../progress-circle';
import { Container, ProgressWrapper, Wrapper } from './stat-box.styled';

type Props = {
	title: string;
	subtitle?: string;
	icon: ReactElement;
	progress: number;
	size?: number;
	increase: string;
};

export const StatBox = ({
	title,
	subtitle,
	icon,
	progress,
	size = 50,
	increase,
}: Props) => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	return (
		<Container>
			<Wrapper>
				<Box>
					{icon}
					<Typography variant='h4' fontWeight='bold' color={colors.grey[100]}>
						{title}
					</Typography>

					<Typography variant='h5' color={colors.greenAccent[500]}>
						{subtitle}
					</Typography>
				</Box>

				<ProgressWrapper>
					<ProgressCircle progress={progress} size={size} />

					<Typography
						variant='h5'
						fontStyle='italic'
						color={colors.greenAccent[600]}
					>
						{increase}
					</Typography>
				</ProgressWrapper>
			</Wrapper>
		</Container>
	);
};
