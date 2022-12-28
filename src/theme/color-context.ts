import { createContext } from 'react';

type ColorContextType = {
	toggleColorMode: () => void;
};

export const ColorContext = createContext<ColorContextType>(
	{} as ColorContextType
);
