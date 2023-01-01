import { Header } from '../../components/header';
import { Container, Wrapper } from './dashboard.styled';

export const Dashboard = () => {
	return (
		<Container>
			<Wrapper>
				<Header title='Dashboard' subtitle='Welcome to your dashboard' />
			</Wrapper>
		</Container>
	);
};
