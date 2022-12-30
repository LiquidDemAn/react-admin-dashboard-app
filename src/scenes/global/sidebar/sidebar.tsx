import React from 'react';
import {
	Sidebar as ProSidebar,
	Menu,
	MenuItem,
	useProSidebar,
	sidebarClasses,
} from 'react-pro-sidebar';
import { IconButton, useTheme } from '@mui/material';
import userAvatar from '../../../assets/user.png';

// ICONS
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { colorsObject } from '../../../theme/colors';
import { Box } from '@mui/system';
import {
	MenuButton,
	MenuHeader,
	MenuTitle,
	User,
	UserImg,
	UserImgWrapper,
	UserName,
	UserPosition,
	UserTitle,
} from './sidebar.styled';

export const Sidebar = () => {
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = colorsObject(mode);
	const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
		useProSidebar();

	const handleCollapse = () => {
		collapseSidebar(!collapsed);
	};

	return (
		<ProSidebar
			rootStyles={{
				[`.${sidebarClasses.container}`]: {
					backgroundColor: `${colors.primary[400]}`,
				},
			}}
		>
			<Menu>
				<MenuButton
					onClick={handleCollapse}
					icon={collapsed ? <MenuOutlinedIcon /> : undefined}
					colors={colors}
				>
					{!collapsed && (
						<MenuHeader>
							<MenuTitle variant='h3' colors={colors}>
								ADMINIS
							</MenuTitle>
							<IconButton onClick={handleCollapse}>
								<MenuOutlinedIcon />
							</IconButton>
						</MenuHeader>
					)}
				</MenuButton>

				{/* USER */}
				{!collapsed && (
					<User>
						<UserImgWrapper>
							<UserImg alt='profile-user' src={userAvatar} />
						</UserImgWrapper>

						<UserTitle>
							<UserName variant='h2' colors={colors}>
								Dmytro
							</UserName>
							<UserPosition colors={colors}>Front End Developer</UserPosition>
						</UserTitle>
					</User>
				)}
			</Menu>
		</ProSidebar>
	);
};
