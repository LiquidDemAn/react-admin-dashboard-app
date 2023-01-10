import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorsObjectType } from '../../theme/colors';

type CircleType = {
	colors: ColorsObjectType;
	angle: number;
	size: number;
};

export const Circle = styled(Box)(({ colors, angle, size }: CircleType) => ({
	width: `${size}px`,
	height: `${size}px`,
	borderRadius: '50%',
	background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                 conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                 ${colors.greenAccent[500]}`,
}));
