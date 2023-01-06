import { Box } from '@mui/system';
import React from 'react';
import { BarChart } from '../../components/bar-chart';
import { Header } from '../../components/header';
import { PageContainer } from '../../global.styled';

export const Bar = () => {
	return (
		<PageContainer>
			<Header title='bar chart' subtitle='Simple Bar Chart' />
			<Box height='73vh'>
				<BarChart />
			</Box>
		</PageContainer>
	);
};
