import { StatBox } from '../../../../components/stat-box';
import { ColorsObjectType } from '../../../../theme/colors';
import { StatsBoxContainer } from './stats-row.styled';
import { Email, PointOfSale, PersonAdd, Traffic } from '@mui/icons-material';

type Props = {
	colors: ColorsObjectType;
};

export const StatsRow = ({ colors }: Props) => {
	return (
		<>
			<StatsBoxContainer backgroundColor={colors.primary[400]}>
				<StatBox
					title='12,361'
					subtitle='Emails Sent'
					progress={0.75}
					increase='+14%'
					icon={<Email sx={{ color: colors.greenAccent[600], fontSize: 26 }} />}
				/>
			</StatsBoxContainer>

			<StatsBoxContainer backgroundColor={colors.primary[400]}>
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
			</StatsBoxContainer>

			<StatsBoxContainer backgroundColor={colors.primary[400]}>
				<StatBox
					title='32,441'
					subtitle='New Clients'
					progress={0.3}
					increase='+5%'
					icon={
						<PersonAdd sx={{ color: colors.greenAccent[600], fontSize: 26 }} />
					}
				/>
			</StatsBoxContainer>

			<StatsBoxContainer backgroundColor={colors.primary[400]}>
				<StatBox
					title='1,325,134'
					subtitle='Traffic Inbound'
					progress={0.8}
					increase='+43%'
					icon={
						<Traffic sx={{ color: colors.greenAccent[600], fontSize: 26 }} />
					}
				/>
			</StatsBoxContainer>
		</>
	);
};
