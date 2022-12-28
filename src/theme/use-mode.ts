import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { themeSettings } from './theme-settings';

export const useMode = () => {
	const [mode, setMode] = useState<PaletteMode>('dark');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return { theme, colorMode };
};
