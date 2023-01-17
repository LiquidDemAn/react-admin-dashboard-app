import { Button } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormInner, FormInput, ButtonContainer } from './form.styled';

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	contact: '',
	address1: '',
	address2: '',
};

const phoneRegExp =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
	firstName: yup.string().required('required'),
	lastName: yup.string().required('required'),
	email: yup.string().email('Invalid email').required('required'),
	contact: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('required'),
	address1: yup.string().required('required'),
	address2: yup.string().required('required'),
});

export type CreateUserValueType = typeof initialValues;

type Props = {
	handleSubmit: (values: CreateUserValueType) => void;
};

export const CreateUserForm = ({ handleSubmit }: Props) => {
	return (
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
	);
};
