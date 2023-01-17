import { ResponsivePie } from '@nivo/pie';
import { useTheme } from '@mui/material';
import { colorsObject } from '../../theme/colors';
import { mockPieData as data } from '../../data/mock-data';
import { BreakpointsEnum } from '../../App';

export const PieChart = () => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	const windowSize = window.innerWidth;
	const isSm = windowSize < BreakpointsEnum.Sm;

	return (
		<ResponsivePie
			data={data}
			isInteractive={false}
			theme={{
				axis: {
					domain: {
						line: {
							stroke: colors.grey[100],
						},
					},
					legend: {
						text: {
							stroke: colors.grey[100],
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
			margin={{
				top: 40,
				right: isSm ? 0 : 80,
				bottom: isSm ? 0 : 80,
				left: isSm ? 20 : 80,
			}}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			activeOuterRadiusOffset={8}
			borderWidth={1}
			borderColor={{
				from: 'color',
				modifiers: [['darker', 0.2]],
			}}
			enableArcLinkLabels={!isSm}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor={colors.grey[100]}
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: 'color' }}
			enableArcLabels
			arcLabelsSkipAngle={10}
			arcLabelsTextColor={{
				from: 'color',
				modifiers: [['darker', 2]],
			}}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			legends={[
				{
					anchor: isSm ? 'top-left' : 'bottom',
					direction: isSm ? 'column' : 'row',
					justify: false,
					translateX: isSm ? -20 : 0,
					translateY: isSm ? -20 : 56,
					itemsSpacing: isSm ? 5 : 0,
					itemWidth: 80,
					itemHeight: 18,
					itemTextColor: '#999',
					itemDirection: 'left-to-right',
					itemOpacity: 1,
					symbolSize: 18,
					symbolShape: 'circle',
					effects: [
						{
							on: 'hover',
							style: {
								itemTextColor: '#000',
							},
						},
					],
				},
			]}
		/>
	);
};
