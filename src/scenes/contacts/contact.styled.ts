import { styled } from '@mui/material/styles';
import { TableComponent } from '../../global.styled';

export const Table = styled(TableComponent)(({ colors }) => ({
	'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
		color: `${colors.grey[100]}`,
	},
}));
