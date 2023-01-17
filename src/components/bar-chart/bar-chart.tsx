import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { colorsObject } from '../../theme/colors';
import { mockBarData as data } from '../../data/mock-data';
import { BreakpointsEnum } from '../../App';

type Props = {
	isDashboard?: boolean;
};

export const BarChart = ({ isDashboard }: Props) => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	const windowSize = window.innerWidth;
	const isMd = windowSize < BreakpointsEnum.Md;

	return (
		<ResponsiveBar
			data={data}
			theme={{
				axis: {
					domain: {
						line: {
							stroke: colors.grey[100],
						},
					},
					legend: {
						text: {
							fill: colors.grey[100],
						},
					},
					ticks: {
						line: {
							stroke: colors.grey[100],
							strokeWidth: 1,
						},

						text: {
							fill: colors.grey[100],
						},
					},
				},
				legends: {
					text: {
						fill: colors.grey[100],
					},
				},
			}}
			keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
			indexBy='country'
			margin={{
				top: 50,
				right: isMd ? 0 : 130,
				bottom: 50,
				left: isMd ? 0 : 60,
			}}
			padding={0.3}
			valueScale={{ type: 'linear' }}
			indexScale={{ type: 'band', round: true }}
			colors={{ scheme: 'nivo' }}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: '#38bcb2',
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: '#eed312',
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			fill={[
				{
					match: {
						id: 'fries',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'sandwich',
					},
					id: 'lines',
				},
			]}
			borderColor={{
				from: 'color',
				modifiers: [['darker', 1.6]],
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: !isDashboard && 'country',
				legendPosition: 'middle',
				legendOffset: 32,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: !isDashboard && 'food',
				legendPosition: 'middle',
				legendOffset: -40,
			}}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{
				from: 'color',
				modifiers: [['darker', 1.6]],
			}}
			legends={[
				{
					dataFrom: 'keys',
					anchor: isMd ? 'bottom' : 'bottom-right',
					direction: isMd ? 'row' : 'column',
					justify: false,
					translateX: isMd ? 21 : 120,
					translateY: isMd ? 55 : 0,
					itemsSpacing: 2,
					itemWidth: isMd ? 60 : 100,
					itemHeight: 20,
					itemDirection: 'left-to-right',
					itemOpacity: 0.85,
					symbolSize: isMd ? 10 : 20,
				},
			]}
			isInteractive={false}
			role='application'
			ariaLabel='Nivo bar chart demo'
			barAriaLabel={function (e) {
				return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
			}}
		/>
	);
};
