import { ResponsiveLine } from '@nivo/line';
import { mockLineData as data } from '../../data/mock-data';
import { useTheme } from '@mui/material';
import { colorsObject } from '../../theme/colors';

type Props = {
	isDashboard?: boolean;
};

export const LineChart = ({ isDashboard }: Props) => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	return (
		<ResponsiveLine
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

				tooltip: {
					container: {
						color: colors.primary[500],
					},
				},
			}}
			colors={isDashboard ? { datum: 'color' } : { scheme: 'nivo' }}
			margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
			xScale={{ type: 'point' }}
			yScale={{
				type: 'linear',
				min: 'auto',
				max: 'auto',
				stacked: true,
				reverse: false,
			}}
			yFormat=' >-.2f'
			curve='catmullRom'
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: !isDashboard && 'transportation',
				legendOffset: 36,
				legendPosition: 'middle',
			}}
			axisLeft={{
				tickValues: 5,
                
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: !isDashboard && 'transportation',
				legendOffset: -40,
				legendPosition: 'middle',
			}}
			enableGridX={false}
			enableGridY={false}
			pointSize={10}
			pointColor={{ theme: 'background' }}
			pointBorderWidth={2}
			pointBorderColor={{ from: 'serieColor' }}
			pointLabelYOffset={-12}
			useMesh={true}
			legends={[
				{
					anchor: 'bottom-right',
					direction: 'column',
					justify: false,
					translateX: 116,
					translateY: 0,
					itemWidth: 100,
					itemHeight: 30,
					itemsSpacing: 8,
					symbolSize: 20,
					symbolShape: 'circle',
					itemDirection: 'left-to-right',
					itemTextColor: '#777',
					effects: [
						{
							on: 'hover',
							style: {
								itemBackground: 'rgba(0, 0, 0, .03)',
								itemOpacity: 1,
							},
						},
					],
				},
			]}
		/>
	);
};
