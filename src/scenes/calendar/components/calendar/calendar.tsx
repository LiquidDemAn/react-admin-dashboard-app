import { Wrapper } from './calendar.styled';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import InteractionPlugin from '@fullcalendar/interaction';
import { DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';

type Props = {
	isMd: boolean;
	handleDateClick: (selected: DateSelectArg) => void;
	handleEventClick: (selected: EventClickArg) => void;
	setEvents: (events: EventApi[]) => void;
};

export const Calendar = ({
	isMd,
	handleDateClick,
	handleEventClick,
	setEvents,
}: Props) => {
	return (
		<Wrapper>
			<FullCalendar
				height='75vh'
				plugins={[dayGridPlugin, timeGridPlugin, InteractionPlugin, listPlugin]}
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
		</Wrapper>
	);
};
