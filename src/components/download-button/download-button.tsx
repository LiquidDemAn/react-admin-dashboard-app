import { useTheme } from '@mui/material';
import { DownloadOutlined } from '@mui/icons-material';
import { colorsObject } from '../../theme/colors';
import { BreakpointsEnum } from '../../App';
import { StyledButton } from './download-button.styled';

type Props = {
	children?: string;
};

export const DownloadButton = ({ children }: Props) => {
	const theme = useTheme();
	const windowSize = window.innerWidth;
	const isSm = windowSize < BreakpointsEnum.Sm;
	const colors = colorsObject(theme.palette.mode);

	return (
		<StyledButton
			textColor={colors.grey[100]}
			backgroundColor={colors.blueAccent[700]}
		>
			<DownloadOutlined />
			{!isSm && children}
		</StyledButton>
	);
};
