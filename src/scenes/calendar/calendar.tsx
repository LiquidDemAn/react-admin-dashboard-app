import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import InteractionPlugin from '@fullcalendar/interaction';
import { List, ListItemText, Typography, useTheme } from '@mui/material';
import { colorsObject } from '../../theme/colors';
import {
	DateSelectArg,
	EventApi,
	EventClickArg,
	formatDate,
} from '@fullcalendar/core';
import { Header } from '../../components/header';
import { PageContainer } from '../../global.styled';
import {
	CalendarContainer,
	CalendarSideBar,
	CalendarWrapper,
	EventsList,
} from './calendar.styled';

type Props = {
	isMd: boolean;
};

export const Calendar = ({ isMd }: Props) => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);
	const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

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
				{/* CURRENT EVENTS */}
				{!isMd && (
					<CalendarSideBar backgroundColor={colors.primary[400]}>
						<Typography variant='h5'>Events</Typography>
						<List>
							{currentEvents.map((event) => (
								<EventsList
									key={event.id}
									backgroundColor={colors.greenAccent[500]}
								>
									<ListItemText
										primary={event.title}
										secondary={
											event.start && (
												<Typography>
													{formatDate(event.start, {
														year: 'numeric',
														month: 'short',
														day: 'numeric',
														timeZoneName: 'short',
													})}
												</Typography>
											)
										}
									/>
								</EventsList>
							))}
						</List>
					</CalendarSideBar>
				)}

				{/* CALENDAR */}
				<CalendarWrapper>
					<FullCalendar
						height='75vh'
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							InteractionPlugin,
							listPlugin,
						]}
						headerToolbar={{
							left: !isMd
								? 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
								: 'title',
							center: !isMd ? 'title' : undefined,
						}}
						initialView='dayGridMonth'
						editable
						selectable
						selectMirror
						dayMaxEvents
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={setEvents}
						initialEvents={[
							{
								id: '1',
								title: 'All-day Event',
								date: '2023-01-01',
							},
						]}
					/>
				</CalendarWrapper>
			</CalendarContainer>
		</PageContainer>
	);
};
