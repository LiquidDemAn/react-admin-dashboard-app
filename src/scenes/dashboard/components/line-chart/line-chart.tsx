import { Box, Typography } from '@mui/material';
import { DownloadButton } from '../../../../components/download-button';
import { LineChart } from '../../../../components/line-chart';
import { ColorsObjectType } from '../../../../theme/colors';
import { Container, Header, Wrapper } from './line-chart.styled';

type Props = {
	colors: ColorsObjectType;
};

export const DashboardLineChart = ({ colors }: Props) => {
	return (
		<Container backgroundColor={colors.primary[400]}>
			<Header>
				<Box>
					<Typography variant='h5' color={colors.grey[100]}>
						Revenue Generated
					</Typography>
					<Typography variant='h3' color={colors.greenAccent[500]}>
						$59,342,32
					</Typography>
				</Box>

				<DownloadButton />
			</Header>

			<Wrapper>
				<LineChart isDashboard />
			</Wrapper>
		</Container>
	);
};
