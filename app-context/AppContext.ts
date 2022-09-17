import { createContext } from 'react';
import { getInitialContext } from '../methods/getInitialContext';
import { AppContextType } from '../types';

export const AppContext = createContext<AppContextType>(getInitialContext());


