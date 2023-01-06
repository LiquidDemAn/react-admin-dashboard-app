import { Button } from '@mui/material';
import { Formik } from 'formik';
import { Header } from '../../components/header';
import { initialValues, userSchema } from './form.config';
import {
	ButtonContainer,
	Container,
	FormInner,
	FormInput,
} from './form.styled';

export const CreateUserForm = () => {
	const handleSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<Container>
			<Header title='Create User' subtitle='Create a New User Profile' />

			<Formik
				onSubmit={handleSubmit}
				initialValues={initialValues}
				validationSchema={userSchema}
			>
				{({
					values,
					errors,
					touched,
					handleBlur,
					handleChange,
					handleSubmit,
				}): any => {
					return (
						<form onSubmit={handleSubmit}>
							<FormInner>
								<FormInput
									fullWidth
									variant='filled'
									label='First Name'
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.firstName}
									name='firstName'
									error={!!touched.firstName && !!errors.firstName}
									helperText={touched.firstName && errors.firstName}
									column={2}
								/>

								<FormInput
									fullWidth
									variant='filled'
									label='Last Name'
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.lastName}
									name='lastName'
									error={!!touched.lastName && !!errors.lastName}
									helperText={touched.lastName && errors.lastName}
									column={2}
								/>

								<FormInput
									fullWidth
									variant='filled'
									type='email'
									label='Email'
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.email}
									name='email'
									error={!!touched.email && !!errors.email}
									helperText={touched.email && errors.email}
								/>

								<FormInput
									fullWidth
									variant='filled'
									label='Contact Number'
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.contact}
									name='contact'
									error={!!touched.contact && !!errors.contact}
									helperText={touched.contact && errors.contact}
								/>

								<FormInput
									fullWidth
									variant='filled'
									label='Address 1'
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.address1}
									name='address1'
									error={!!touched.address1 && !!errors.address1}
									helperText={touched.address1 && errors.address1}
								/>

								<FormInput
									fullWidth
									variant='filled'
									label='Address 2'
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.address2}
									name='address2'
									error={!!touched.address2 && !!errors.address2}
									helperText={touched.address2 && errors.address2}
								/>
							</FormInner>

							<ButtonContainer>
								<Button type='submit' color='secondary' variant='contained'>
									Create New User
								</Button>
							</ButtonContainer>
						</form>
					);
				}}
			</Formik>
		</Container>
	);
};
