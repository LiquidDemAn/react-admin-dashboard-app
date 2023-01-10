import { useTheme } from '@mui/material';
import { colorsObject } from '../../theme/colors';
import { Circle } from './progress-circle.styled';

type Props = {
	progress: number;
	size: number;
};

export const ProgressCircle = ({ progress, size }: Props) => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);
	const angle = progress * 360;

	return <Circle colors={colors} angle={angle} size={size} />;
};
