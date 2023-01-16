import { EventApi, formatDate } from '@fullcalendar/core';
import { List, ListItemText, Typography } from '@mui/material';
import { ColorsObjectType } from '../../../../theme/colors';
import { Event, Container } from './events.styled';

type Props = {
	colors: ColorsObjectType;
	currentEvents: EventApi[];
};

export const Events = ({ colors, currentEvents }: Props) => {
	return (
		<Container backgroundColor={colors.primary[400]}>
			<Typography variant='h5'>Events</Typography>
			<List>
				{currentEvents.map((event) => (
					<Event key={event.id} backgroundColor={colors.greenAccent[500]}>
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
					</Event>
				))}
			</List>
		</Container>
	);
};
