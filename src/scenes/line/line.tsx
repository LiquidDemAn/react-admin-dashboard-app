import { Box } from '@mui/system';
import { Header } from '../../components/header';
import { LineChart } from '../../components/line-chart';
import { PageContainer } from '../../global.styled';

export const Line = () => {
	return (
		<PageContainer>
			<Header title='Line chart' subtitle='Simple Line Chart' />
			<Box height='73vh'>
				<LineChart />
			</Box>
		</PageContainer>
	);
};
