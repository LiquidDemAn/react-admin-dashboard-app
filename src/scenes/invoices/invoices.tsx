import { colorsObject } from '../../theme/colors';
import { mockDataInvoices } from '../../data/mock-data';
import { Header } from '../../components/header';
import { Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PageContainer } from '../../global.styled';
import { Table } from './invoices.styled';

export const Invoices = () => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'ID',
		},

		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},

		{
			field: 'phone',
			headerName: 'Phone Number',
			flex: 1,
		},

		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},

		{
			field: 'cost',
			headerName: 'Cost',
			flex: 1,
			renderCell: ({ row }) => (
				<Typography color={colors.greenAccent[500]}>${row.cost}</Typography>
			),
		},

		{
			field: 'date',
			headerName: 'Date',
			flex: 1,
		},
	];

	return (
		<PageContainer>
			<Header title='Invoices' subtitle='List of Invoice Balances' />
			<Table colors={colors}>
				<DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
			</Table>
		</PageContainer>
	);
};
