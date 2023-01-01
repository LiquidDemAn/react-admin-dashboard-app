import { colorsObject } from '../../theme/colors';
import { mockDataContacts } from '../../data/mock-data';
import { Header } from '../../components/header';
import { useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

import { Table } from './contact.styled';
import { PageContainer } from '../../global.styled';

export const Contacts = () => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'ID',
			flex: 0.5,
		},

		{
			field: 'registrarId',
			headerName: 'Register ID',
		},

		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},

		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},

		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			headerAlign: 'left',
			align: 'left',
		},

		{
			field: 'phone',
			headerName: 'Phone Number',
			flex: 1,
		},

		{
			field: 'address',
			headerName: 'Address',
			flex: 1,
		},

		{
			field: 'city',
			headerName: 'City',
			flex: 1,
		},

		{
			field: 'zipCode',
			headerName: 'ZipCode',
			flex: 1,
		},
	];

	return (
		<PageContainer>
			<Header
				title='Contacts'
				subtitle='List of Contacts for Future References'
			/>
			<Table colors={colors}>
				<DataGrid
					components={{
						Toolbar: GridToolbar,
					}}
					rows={mockDataContacts}
					columns={columns}
				/>
			</Table>
		</PageContainer>
	);
};
