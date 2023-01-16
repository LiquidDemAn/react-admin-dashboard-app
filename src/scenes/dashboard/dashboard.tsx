import { Header } from '../../components/header';
import { FlexBox, PageContainer } from '../../global.styled';
import { DownloadButton, Main } from './dashboard.styled';
import { useTheme } from '@mui/material';
import { colorsObject } from '../../theme/colors';
import { DownloadOutlined } from '@mui/icons-material';
import { BreakpointsEnum } from '../../App';
import { StatsRow } from './components/stats-row';
import { DashboardLineChart } from './components/line-chart';
import { DashboardTransactions } from './components/transactions';
import { DashboardProgressCircle } from './components/progress-circle';
import { DashboardBarChart } from './components/bar-chart';
import { DashboardGeographyChart } from './components/geography-chart';

export const Dashboard = () => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);
	const windowSize = window.innerWidth;
	const isSm = windowSize < BreakpointsEnum.Sm;

	return (
		<PageContainer>
			<FlexBox>
				<Header title='Dashboard' subtitle='Welcome to your dashboard' />

				<DownloadButton colors={colors}>
					<DownloadOutlined />
					{!isSm && 'Download Reports'}
				</DownloadButton>
			</FlexBox>

			{/* GRID & CHARTS */}
			<Main>
				{/* ROW 1 */}
				<StatsRow colors={colors} />
				{/* /ROW 1 */}

				{/* ROW 2 */}
				<DashboardLineChart colors={colors} />
				<DashboardTransactions colors={colors} />
				{/* /ROW 2 */}

				{/* ROW 3 */}
				<DashboardProgressCircle colors={colors} />
				<DashboardBarChart backgroundColor={colors.primary[400]} />
				<DashboardGeographyChart colors={colors} />
				{/* /ROW 3 */}
			</Main>
		</PageContainer>
	);
};
