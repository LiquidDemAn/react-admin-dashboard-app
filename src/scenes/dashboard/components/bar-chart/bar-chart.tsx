import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BarChart } from '../../../../components/bar-chart';
import { DashboardGridContainer } from '../../dashboard.styled';

type Props = {
	backgroundColor: string;
};

export const DashboardBarChart = ({ backgroundColor }: Props) => {
	return (
		<DashboardGridContainer backgroundColor={backgroundColor}>
			<Typography variant='h5'>Sales Quantity</Typography>
			<Box height='275px' mt='-20px'>
				<BarChart isDashboard />
			</Box>
		</DashboardGridContainer>
	);
};
