import { Header } from '../../components/header';
import { PageContainer } from '../../global.styled';
import { CreateUserForm } from './components/form';
import { CreateUserValueType } from './components/form/form';

export const CreateUserPage = () => {
	const handleSubmit = (values: CreateUserValueType) => {
		console.log(values);
	};

	return (
		<PageContainer>
			<Header title='Create User' subtitle='Create a New User Profile' />
			<CreateUserForm handleSubmit={handleSubmit} />
		</PageContainer>
	);
};
