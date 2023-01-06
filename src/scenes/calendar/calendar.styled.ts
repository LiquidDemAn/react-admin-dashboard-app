import { Box, List } from '@mui/material';
import { styled } from '@mui/material/styles';

type BackgroundProps = {
	backgroundcolor: string;
};

export const CalendarContainer = styled(Box)`
	display: flex;
	justify-content: space-between;
`;

export const CalendarSideBar = styled(Box)<BackgroundProps>`
	flex: 1 1 20%;
	padding: 15px;
	border-radius: 4px;
	background-color: ${(props) => props.backgroundcolor};
`;

export const EventsList = styled(List)<BackgroundProps>`
	margin: 10px 0;
	border-radius: 2px;
	background-color: ${(props) => props.backgroundcolor};
`;

export const CalendarWrapper = styled(Box)`
	flex: 1 1 100%;
	margin-left: 15px;
`;
