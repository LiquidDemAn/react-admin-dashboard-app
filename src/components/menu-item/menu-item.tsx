import { SvgIconTypeMap, Typography, useTheme } from '@mui/material';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../App';
import { colorsObject } from '../../theme/colors';
import { Item } from './menu-item.styled';

type Props = {
	title: string;
	icon: ReactElement<SvgIconTypeMap>;
	to: RoutesEnum;
	selected: string;
	setSelected: (selected: RoutesEnum) => void;
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
		setSelected(to);
	};

	return (
		<Link to={to}>
			<Item
				active={selected === to}
				onClick={handleSelect}
				icon={icon}
				color={colors.grey[100]}
			>
				<Typography>{title}</Typography>
			</Item>
		</Link>
	);
};
