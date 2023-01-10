import { Header } from '../../components/header';
import { PieChart } from '../../components/pie-chart';
import { ContentBox, PageContainer } from '../../global.styled';

export const Pie = () => {
	return (
		<PageContainer>
			<Header title='pie chart' subtitle='Simple Pie Chart' />
			<ContentBox>
				<PieChart />
			</ContentBox>
		</PageContainer>
	);
};
