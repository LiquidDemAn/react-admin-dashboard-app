import { Typography } from '@mui/material';
import { ProgressCircle } from '../../../../components/progress-circle';
import { ColorsObjectType } from '../../../../theme/colors';
import { DashboardGridContainer } from '../../dashboard.styled';
import { Wrapper } from './progress-circle.styled';

type Props = {
	colors: ColorsObjectType;
};

export const DashboardProgressCircle = ({ colors }: Props) => {
	return (
		<DashboardGridContainer backgroundColor={colors.primary[400]}>
			<Typography variant='h5'>Campaign</Typography>
			<Wrapper>
				<ProgressCircle size={125} progress={0.75} />
				<Typography variant='h5' color={colors.greenAccent[500]}>
					$48,352 revenue generated
				</Typography>
				<Typography>Includes extra misc expenditures and costs</Typography>
			</Wrapper>
		</DashboardGridContainer>
	);
};
