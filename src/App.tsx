import { CssBaseline, ThemeProvider } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './scenes/contacts';
import { Dashboard } from './scenes/dashboard';
import { Sidebar } from './scenes/global/sidebar';
import { Topbar } from './scenes/global/topbar';
import { Team } from './scenes/team';
import { ColorContext } from './theme/color-context';
import { useMode } from './theme/use-mode';

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
								<Route path='/' element={<Dashboard />} />
								<Route path='/team' element={<Team />} />
								<Route path='/contacts' element={<Contacts />} />
							</Routes>
						</main>
					</div>
				</ThemeProvider>
			</ColorContext.Provider>
		</ProSidebarProvider>
	);
}

export default App;
