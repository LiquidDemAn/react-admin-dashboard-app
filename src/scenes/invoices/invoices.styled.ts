import { styled } from '@mui/material/styles';
import { TableComponent } from '../../global.styled';

export const Table = styled(TableComponent)(({ colors }) => ({
	'& .MuiCheckbox-root': {
		color: `${colors.greenAccent[200]} !important`,
	},
}));
