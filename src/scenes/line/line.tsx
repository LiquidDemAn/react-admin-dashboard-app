import { Header } from '../../components/header';
import { LineChart } from '../../components/line-chart';
import { ContentBox, PageContainer } from '../../global.styled';

export const Line = () => {
	return (
		<PageContainer>
			<Header title='Line chart' subtitle='Simple Line Chart' />
			<ContentBox>
				<LineChart />
			</ContentBox>
		</PageContainer>
	);
};
