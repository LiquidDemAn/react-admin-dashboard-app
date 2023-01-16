import { Box, List } from '@mui/material';
import { styled } from '@mui/material/styles';

type BackgroundProps = {
	backgroundColor: string;
};

export const CalendarContainer = styled(Box)`
	display: flex;
	justify-content: space-between;
`;

export const CalendarSideBar = styled(Box)(
	({ backgroundColor }: BackgroundProps) => ({
		flex: '1 1 20%',
		padding: 15,
		borderRadius: 4,
		backgroundColor,
	})
);

export const EventsList = styled(List)(
	({ backgroundColor }: BackgroundProps) => ({
		margin: '10px 0',
		paddingLeft: 5,
		borderRadius: 2,
		backgroundColor,
	})
);

export const CalendarWrapper = styled(Box)({
	flex: '1 1 100%',
	marginLeft: 0,

	'@media(min-width: 768px)': {
		marginLeft: 15,
	},
});
