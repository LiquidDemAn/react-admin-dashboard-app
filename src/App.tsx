import { CssBaseline, ThemeProvider } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, Routes } from 'react-router-dom';
import { Calendar } from './scenes/calendar';
import { Contacts } from './scenes/contacts';
import { Dashboard } from './scenes/dashboard';
import { CreateUserForm } from './scenes/form';
import { Sidebar } from './scenes/global/sidebar';
import { Topbar } from './scenes/global/topbar';
import { Invoices } from './scenes/invoices';
import { Team } from './scenes/team';
import { ColorContext } from './theme/color-context';
import { useMode } from './theme/use-mode';

export enum RoutesEnum {
	Home = '/',
	Team = 'team',
	Contacts = 'contacts',
	Invoices = 'invoices',
	Form = 'form',
	Calendar = 'calendar'
}

function App() {
	const { theme, colorMode } = useMode();

	return (
		<ProSidebarProvider>
			<ColorContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<div className='app'>
						<Sidebar />
						<main className='content'>
							<Topbar />
							<Routes>
								<Route path={RoutesEnum.Home} element={<Dashboard />} />
								<Route path={RoutesEnum.Team} element={<Team />} />
								<Route path={RoutesEnum.Contacts} element={<Contacts />} />
								<Route path={RoutesEnum.Invoices} element={<Invoices />} />
								<Route path={RoutesEnum.Form} element={<CreateUserForm />} />
								<Route path={RoutesEnum.Calendar} element={<Calendar />} />
							</Routes>
						</main>
					</div>
				</ThemeProvider>
			</ColorContext.Provider>
		</ProSidebarProvider>
	);
}

export default App;
