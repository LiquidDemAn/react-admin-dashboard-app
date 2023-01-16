import { Box, Typography } from '@mui/material';
import { LineChart } from '../../../../components/line-chart';
import { ColorsObjectType } from '../../../../theme/colors';
import { DownloadButton } from '../../dashboard.styled';
import { Container, Header, Wrapper } from './line-chart.styled';
import { DownloadOutlined } from '@mui/icons-material';

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

				<DownloadButton colors={colors}>
					<DownloadOutlined />
				</DownloadButton>
			</Header>

			<Wrapper>
				<LineChart isDashboard />
			</Wrapper>
		</Container>
	);
};
