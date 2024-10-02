import {createContext} from 'react';
import {SocketContextValues} from './types';

const defaultValues: SocketContextValues = {
  isLoading: true,
  isConnected: false,
  hasInternetConnection: false,
  tokens: [],
  handleRefreshTokenList: () => {},
};

export const SocketContext = createContext<SocketContextValues>(defaultValues);
