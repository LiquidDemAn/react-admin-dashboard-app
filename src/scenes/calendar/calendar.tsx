import { useState } from 'react';
import { useTheme } from '@mui/material';
import { colorsObject } from '../../theme/colors';
import { DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import { Header } from '../../components/header';
import { PageContainer } from '../../global.styled';
import { CalendarContainer } from './calendar.styled';
import { Calendar } from './components/calendar';
import { BreakpointsEnum } from '../../App';
import { Events } from './components/events';

export const CalendarPage = () => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);
	const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
	const windowSize = window.innerWidth;
	const isMd = windowSize < BreakpointsEnum.Md;

	const handleDateClick = (selected: DateSelectArg) => {
		const title = prompt('Please enter a new title for your event');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.startStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};

	const handleEventClick = (selected: EventClickArg) => {
		const confirm = window.confirm(
			`Are you sure you want to delete the event ${selected.event.title}`
		);

		if (confirm) {
			selected.event.remove();
		}
	};

	const setEvents = (events: EventApi[]) => {
		setCurrentEvents(events);
	};

	return (
		<PageContainer>
			<Header title='Calendar' subtitle='Full calendar Interactive Page' />

			<CalendarContainer>
				{!isMd && <Events colors={colors} currentEvents={currentEvents} />}

				<Calendar
					isMd={isMd}
					handleDateClick={handleDateClick}
					handleEventClick={handleEventClick}
					setEvents={setEvents}
				/>
			</CalendarContainer>
		</PageContainer>
	);
};
