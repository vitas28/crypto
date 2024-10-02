import React, {FC, useCallback, useMemo} from 'react';
import {SocketContext} from '../context';
import {SocketProviderProps} from '../types';

import {useSocket} from '@/hooks';

export const SocketProvider: FC<SocketProviderProps> = ({children}) => {
  const {socket, tokens, isConnected, isLoading, hasInternetConnection} =
    useSocket();

  const handleRefreshTokenList = useCallback(() => {
    socket?.close?.();
  }, [socket]);

  const values = useMemo(() => {
    return {
      isConnected,
      tokens,
      isLoading,
      hasInternetConnection,
      handleRefreshTokenList,
    };
  }, [
    handleRefreshTokenList,
    hasInternetConnection,
    isConnected,
    isLoading,
    tokens,
  ]);

  return (
    <SocketContext.Provider value={values}>{children}</SocketContext.Provider>
  );
};
