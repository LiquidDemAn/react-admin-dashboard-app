import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorContext } from './theme/color-context';
import { useMode } from './theme/use-mode';

function App() {
	const { theme, colorMode } = useMode();

	return (
		<ColorContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<main className='content'>
						<h1>Hello</h1>
						<span>Q</span>
					</main>
				</div>
			</ThemeProvider>
		</ColorContext.Provider>
	);
}

export default App;
