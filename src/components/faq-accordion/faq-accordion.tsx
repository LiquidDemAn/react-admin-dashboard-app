import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { colorsObject } from '../../theme/colors';

type Props = {
	title: string;
	children: string;
};

export const FaqAccordion = ({ title, children }: Props) => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	return (
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant='h5' color={colors.greenAccent[500]}>
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{children}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};
