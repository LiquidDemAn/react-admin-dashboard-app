import { colorsObject } from '../../theme/colors';
import { mockDataTeam } from '../../data/mock-data';
import { Header } from '../../components/header';
import { useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {
	AccessBlock,
	AccessName,
	Container,
	TableWrapper,
} from './team.styled';

// Icons
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';


export const Team = () => {
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
			field: 'access',
			headerName: 'Access Level',
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<AccessBlock colors={colors} access={access}>
						{access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
						{access === 'manager' && <SecurityOutlinedIcon />}
						{access === 'user' && <LockOpenOutlinedIcon />}

						<AccessName color={colors.grey[100]}>{access}</AccessName>
					</AccessBlock>
				);
			},
		},
	];

	return (
		<Container>
			<Header title='Team' subtitle='Managing the Team Members' />
			<TableWrapper colors={colors}>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</TableWrapper>
		</Container>
	);
};
