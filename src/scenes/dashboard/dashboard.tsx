import { Header } from '../../components/header';
import { PageContainer } from '../../global.styled';
import {
	DashboardStatsBox,
	DownloadButton,
	HeaderWrapper,
	Main,
} from './dashboard.styled';
import { Box, useTheme } from '@mui/material';
import { colorsObject } from '../../theme/colors';
import { mockTransactions } from '../../data/mock-data';
import {
	DownloadOutlined,
	Email,
	PointOfSale,
	PersonAdd,
	Traffic,
} from '@mui/icons-material';
import { LineChart } from '../../components/line-chart';
import { BarChart } from '../../components/bar-chart';
import { PieChart } from '../../components/pie-chart';
import { GeographyChart } from '../../components/geography-chart';
import { StatBox } from '../../components/stat-box';
import { ProgressCircle } from '../../components/progress-circle';

export const Dashboard = () => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	return (
		<PageContainer>
			<HeaderWrapper>
				<Header title='Dashboard' subtitle='Welcome to your dashboard' />

				<DownloadButton colors={colors}>
					<DownloadOutlined />
					Download Reports
				</DownloadButton>
			</HeaderWrapper>

			{/* GRID & CHARTS */}
			<Main>
				{/* ROW 1 */}
				<DashboardStatsBox backgroundColor={colors.primary[400]}>
					<StatBox
						title='12,361'
						subtitle='Emails Sent'
						progress={0.75}
						increase='+14%'
						icon={
							<Email sx={{ color: colors.greenAccent[600], fontSize: 26 }} />
						}
					/>
				</DashboardStatsBox>

				<DashboardStatsBox backgroundColor={colors.primary[400]}>
					<StatBox
						title='431,225'
						subtitle='Sales Obtained'
						progress={0.5}
						increase='+21%'
						icon={
							<PointOfSale
								sx={{ color: colors.greenAccent[600], fontSize: 26 }}
							/>
						}
					/>
				</DashboardStatsBox>

				<DashboardStatsBox backgroundColor={colors.primary[400]}>
					<StatBox
						title='32,441'
						subtitle='New Clients'
						progress={0.3}
						increase='+5%'
						icon={
							<PersonAdd
								sx={{ color: colors.greenAccent[600], fontSize: 26 }}
							/>
						}
					/>
				</DashboardStatsBox>

				<DashboardStatsBox backgroundColor={colors.primary[400]}>
					<StatBox
						title='1,325,134'
						subtitle='Traffic Inbound'
						progress={0.8}
						increase='+43%'
						icon={
							<Traffic sx={{ color: colors.greenAccent[600], fontSize: 26 }} />
						}
					/>
				</DashboardStatsBox>
				{/* /ROW 1 */}

				{/* ROW 2 */}
				
			</Main>
		</PageContainer>
	);
};
