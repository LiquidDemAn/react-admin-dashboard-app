import { useState } from 'react';
import { Menu, useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
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
import {
	ProSidebar,
	MenuButton,
	MenuHeader,
	User,
	UserImg,
	UserImgWrapper,
	UserName,
	UserTitle,
	MenuItemsTitle,
} from './sidebar.styled';
import { MenuItemComponent } from '../../../components/menu-item';

export const Sidebar = () => {
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = colorsObject(mode);
	const [selected, setSelected] = useState('Dashboard');
	const { collapseSidebar, collapsed } = useProSidebar();

	const handleCollapse = () => {
		collapseSidebar(!collapsed);
	};

	return (
		<ProSidebar backgroundColor={colors.primary[400]}>
			<Menu>
				<MenuButton
					onClick={handleCollapse}
					icon={collapsed ? <MenuOutlinedIcon /> : undefined}
					color={colors.grey[100]}
				>
					{!collapsed && (
						<MenuHeader>
							<Typography variant='h3' color={colors.grey[100]}>
								ADMINIS
							</Typography>
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
							<UserName variant='h2' color={colors.grey[100]}>
								Dmytro
							</UserName>
							<Typography color={colors.greenAccent[500]}>
								Front End Developer
							</Typography>
						</UserTitle>
					</User>
				)}

				{/* MENU ITEMS */}
				<Box>
					<MenuItemComponent
						title='Dashboard'
						to='/'
						icon={<HomeOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					{!collapsed && (
						<MenuItemsTitle color={colors.grey[300]} variant='h6'>
							Data
						</MenuItemsTitle>
					)}

					<MenuItemComponent
						title='Manage Team'
						to='/team'
						icon={<PeopleOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					<MenuItemComponent
						title='Contacts Information'
						to='/contacts'
						icon={<ContactsOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					<MenuItemComponent
						title='Invoices Balances'
						to='/invoices'
						icon={<ReceiptOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					{!collapsed && (
						<MenuItemsTitle color={colors.grey[300]} variant='h6'>
							Pages
						</MenuItemsTitle>
					)}

					<MenuItemComponent
						title='Profile Form'
						to='/form'
						icon={<PersonOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					<MenuItemComponent
						title='Calendar'
						to='/calendar'
						icon={<CalendarTodayOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					<MenuItemComponent
						title='FAQ Page'
						to='/faq'
						icon={<HelpOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					{!collapsed && (
						<MenuItemsTitle color={colors.grey[300]} variant='h6'>
							Charts
						</MenuItemsTitle>
					)}

					<MenuItemComponent
						title='Bar Chart'
						to='/bar'
						icon={<BarChartOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					<MenuItemComponent
						title='Pie Chart'
						to='/pie'
						icon={<PieChartOutlineOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					<MenuItemComponent
						title='Line Chart'
						to='/line'
						icon={<TimelineOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>

					<MenuItemComponent
						title='Geography Chart'
						to='/geography'
						icon={<MapOutlinedIcon />}
						selected={selected}
						setSelected={setSelected}
					/>
				</Box>
			</Menu>
		</ProSidebar>
	);
};
