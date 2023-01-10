import { GeographyChart } from '../../components/geography-chart';
import { Header } from '../../components/header';
import { ContentBox, PageContainer } from '../../global.styled';
import { useTheme } from '@mui/material';
import { colorsObject } from '../../theme/colors';

export const Geography = () => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	return (
		<PageContainer>
			<Header title='Geography chart' subtitle='Simple Line Chart' />
			<ContentBox borderColor={colors.grey[100]}>
				<GeographyChart colors={colors} />
			</ContentBox>
		</PageContainer>
	);
};
