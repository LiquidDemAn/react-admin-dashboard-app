import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GeographyChart } from '../../../../components/geography-chart';
import { ColorsObjectType } from '../../../../theme/colors';
import { DashboardGridContainer } from '../../dashboard.styled';

type Props = {
	colors: ColorsObjectType;
};

export const DashboardGeographyChart = ({ colors }: Props) => {
	return (
		<DashboardGridContainer backgroundColor={colors.primary[400]}>
			<Typography variant='h5'>Geography Based Traffic</Typography>
			<Box height={240}>
				<GeographyChart isDashboard colors={colors} />
			</Box>
		</DashboardGridContainer>
	);
};
