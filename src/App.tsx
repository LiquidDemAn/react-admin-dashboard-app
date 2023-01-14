import { CssBaseline, ThemeProvider } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, Routes } from 'react-router-dom';
import { Bar } from './scenes/bar';
import { Calendar } from './scenes/calendar';
import { Contacts } from './scenes/contacts';
import { Dashboard } from './scenes/dashboard';
import { Faq } from './scenes/faq';
import { CreateUserForm } from './scenes/form';
import { Geography } from './scenes/geography';
import { Sidebar } from './scenes/global/sidebar';
import { Topbar } from './scenes/global/topbar';
import { Invoices } from './scenes/invoices';
import { Line } from './scenes/line';
import { Pie } from './scenes/pie';
import { Team } from './scenes/team';
import { ColorContext } from './theme/color-context';
import { useMode } from './theme/use-mode';

export enum RoutesEnum {
	Home = '/',
	Team = 'team',
	Contacts = 'contacts',
	Invoices = 'invoices',
	Form = 'form',
	Calendar = 'calendar',
	Faq = 'faq',
	Bar = 'bar',
	Pie = 'pie',
	Line = 'line',
	Geography = 'geography',
}

export enum BreakpointsEnum {
	Sm = 576,
	Md = 768,
	Lg = 992,
	XL = 1200,
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
								<Route path={RoutesEnum.Faq} element={<Faq />} />
								<Route path={RoutesEnum.Bar} element={<Bar />} />
								<Route path={RoutesEnum.Pie} element={<Pie />} />
								<Route path={RoutesEnum.Line} element={<Line />} />
								<Route path={RoutesEnum.Geography} element={<Geography />} />
							</Routes>
						</main>
					</div>
				</ThemeProvider>
			</ColorContext.Provider>
		</ProSidebarProvider>
	);
}

export default App;
