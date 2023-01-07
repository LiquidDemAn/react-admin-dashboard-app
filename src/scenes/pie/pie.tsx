import { Box } from '@mui/system';
import { Header } from '../../components/header';
import { PieChart } from '../../components/pie-chart';
import { PageContainer } from '../../global.styled';

export const Pie = () => {
	return (
		<PageContainer>
			<Header title='pie chart' subtitle='Simple Pie Chart' />
			<Box height='73vh'>
				<PieChart />
			</Box>
		</PageContainer>
	);
};
