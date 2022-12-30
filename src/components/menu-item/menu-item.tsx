import { SvgIconTypeMap, Typography, useTheme } from '@mui/material';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { colorsObject } from '../../theme/colors';
import { Item } from './menu-item.styled';

type Props = {
	title: string;
	icon: ReactElement<SvgIconTypeMap>;
	to: string;
	selected: string;
	setSelected: (selected: string) => void;
};

export const MenuItemComponent = ({
	selected,
	title,
	to,
	setSelected,
	icon,
}: Props) => {
	const theme = useTheme();
	const colors = colorsObject(theme.palette.mode);

	const handleSelect = () => {
		setSelected(title);
	};

	return (
		<Link to={to}>
			<Item
				active={selected === title}
				onClick={handleSelect}
				icon={icon}
                color={colors.grey[100]}
			>
				<Typography>{title}</Typography>
			</Item>
		</Link>
	);
};
