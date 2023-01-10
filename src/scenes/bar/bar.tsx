import { BarChart } from '../../components/bar-chart';
import { Header } from '../../components/header';
import { PageContainer, ContentBox } from '../../global.styled';

export const Bar = () => {
	return (
		<PageContainer>
			<Header title='bar chart' subtitle='Simple Bar Chart' />
			<ContentBox>
				<BarChart />
			</ContentBox>
		</PageContainer>
	);
};
