import { Header } from '../../components/header';
import { FlexBox, PageContainer } from '../../global.styled';
import {
	LineChartContainer,
	LineChartHeader,
	DashboardStatsBox,
	DownloadButton,
	Main,
	LineChartWrapper,
	TransactionsContainer,
	TransactionsHeader,
	Transaction,
	TransactionCost,
	ProgressCircleContainer,
	ProgressCircleWrapper,
	BarChartContainer,
	BarChartWrapper,
	GeographyChartWrapper,
	GeographyChartContainer,
} from './dashboard.styled';
import { Box, Typography, useTheme } from '@mui/material';
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
import { GeographyChart } from '../../components/geography-chart';
import { StatBox } from '../../components/stat-box';
import { ProgressCircle } from '../../components/progress-circle';
import { BreakpointsEnum } from '../../App';

export const Dashboard = () => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);
	const windowSize = window.innerWidth;

	return (
		<PageContainer>
			<FlexBox>
				<Header title='Dashboard' subtitle='Welcome to your dashboard' />

				<DownloadButton colors={colors}>
					<DownloadOutlined />
					{windowSize > BreakpointsEnum.Sm && 'Download Reports'}
				</DownloadButton>
			</FlexBox>

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
				<LineChartContainer backgroundColor={colors.primary[400]}>
					<LineChartHeader>
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
					</LineChartHeader>

					<LineChartWrapper>
						<LineChart isDashboard />
					</LineChartWrapper>
				</LineChartContainer>

				<TransactionsContainer backgroundColor={colors.primary[400]}>
					<TransactionsHeader colors={colors}>
						<Typography variant='h5' color={colors.grey[100]}>
							Recent Transactions
						</Typography>
					</TransactionsHeader>

					{mockTransactions.map((transaction, index) => (
						<Transaction
							borderColor={colors.primary[500]}
							key={`${transaction.txId}-${index}`}
						>
							<Box>
								<Typography variant='h5' color={colors.greenAccent[500]}>
									{transaction.txId}
								</Typography>

								<Typography color={colors.grey[100]}>
									{transaction.user}
								</Typography>
							</Box>

							<Box>
								<Typography color={colors.grey[100]}>
									{transaction.date}
								</Typography>
								<TransactionCost backgroundColor={colors.greenAccent[500]}>
									${transaction.cost}
								</TransactionCost>
							</Box>
						</Transaction>
					))}
				</TransactionsContainer>
				{/* /ROW 2 */}

				{/* ROW 3 */}
				<ProgressCircleContainer backgroundColor={colors.primary[400]}>
					<Typography variant='h5'>Campaign</Typography>
					<ProgressCircleWrapper>
						<ProgressCircle size={125} progress={0.75} />
						<Typography variant='h5' color={colors.greenAccent[500]}>
							$48,352 revenue generated
						</Typography>
						<Typography>Includes extra misc expenditures and costs</Typography>
					</ProgressCircleWrapper>
				</ProgressCircleContainer>

				<BarChartContainer backgroundColor={colors.primary[400]}>
					<Typography variant='h5'>Sales Quantity</Typography>
					<BarChartWrapper>
						<BarChart isDashboard />
					</BarChartWrapper>
				</BarChartContainer>

				<GeographyChartContainer backgroundColor={colors.primary[400]}>
					<Typography variant='h5'>Geography Based Traffic</Typography>
					<GeographyChartWrapper>
						<GeographyChart isDashboard colors={colors} />
					</GeographyChartWrapper>
				</GeographyChartContainer>
			</Main>
		</PageContainer>
	);
};
