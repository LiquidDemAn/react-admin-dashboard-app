import {
	TopbarContainer,
	TopbarSearchBox,
	TopbarSearchInput,
	TopbarSearchButton,
} from './topbar.styled';
import { useContext } from 'react';
import { ColorContext } from '../../../theme/color-context';
import { useTheme, IconButton } from '@mui/material';
import { colorsObject } from '../../../theme/colors';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { FlexBox } from '../../../global.styled';

export const Topbar = () => {
	const theme = useTheme();
	const { toggleColorMode } = useContext(ColorContext);
	const mode = theme.palette.mode;
	const colors = colorsObject(mode);

	return (
		<TopbarContainer>
			{/* Searach */}
			<TopbarSearchBox colors={colors}>
				<TopbarSearchInput placeholder='Search' />
				<TopbarSearchButton>
					<SearchIcon />
				</TopbarSearchButton>
			</TopbarSearchBox>

			{/* Icons */}
			<FlexBox>
				<IconButton onClick={toggleColorMode}>
					{mode === 'dark' ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>

				<IconButton>
					<PersonOutlinedIcon />
				</IconButton>

				<IconButton>
					<NotificationsOutlinedIcon />
				</IconButton>

				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
			</FlexBox>
		</TopbarContainer>
	);
};
