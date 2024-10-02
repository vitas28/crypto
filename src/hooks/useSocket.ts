import {TokenItemType} from '@/context/types';
import {SOCKET_URL, TOKENS} from '@/configs';
import {TokensEvent} from '@/context/types';
import {useCallback, useEffect, useState} from 'react';
import {generateUrl} from '@/utils/helpers';
import NetInfo from '@react-native-community/netinfo';

let timeout: NodeJS.Timeout;

export const useSocket = () => {
  const [hasInternetConnection, setHasInternetConnection] =
    useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isConnected, setConnected] = useState<Nullable<boolean>>(null);
  const [tokens, setTokens] = useState<TokenItemType[]>([]);
  const [socket, setSocket] = useState<Nullable<WebSocket>>(null);

  const connect = useCallback(() => {
    const url = generateUrl(SOCKET_URL, TOKENS);
    const _socket = new WebSocket(url);
    setSocket(_socket);
  }, []);

  useEffect(() => {
    if (hasInternetConnection && !isConnected && isConnected !== null) {
      timeout = setTimeout(() => {
        connect();
      }, 3000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [connect, hasInternetConnection, isConnected]);

  useEffect(() => {
    connect();
  }, [connect]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setHasInternetConnection(!!state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onopen = () => {
      setLoading(false);
      console.log('open');
      setConnected(true);
      if (timeout) {
        clearTimeout(timeout);
      }
    };

    socket.onclose = () => {
      setLoading(true);
      console.log('close');
      setConnected(false);
      setSocket(null);
    };

    return () => {
      socket.onopen = null;
      socket.onclose = null;
      socket.onmessage = null;
    };
  }, [socket]);

  useEffect(() => {
    const handleGetTokens = (event: TokensEvent) => {
      const _data = event && event.data ? JSON.parse(event.data) : null;
      if (_data) {
        const newArray = tokens.filter(t => t.s !== _data.s);
        newArray.push(_data);
        setTokens(
          newArray.sort((a, b) => {
            if (a.s < b.s) {
              return -1;
            }
            if (a.s > b.s) {
              return 1;
            }
            return 0;
          }),
        );
      }
    };
    if (socket && isConnected) {
      socket.onmessage = (event: WebSocketMessageEvent) => {
        if ('data' in event && 'isTrusted' in event) {
          handleGetTokens(event as TokensEvent);
        }
      };
    }
    /*
      I added this line because eslint would like to use socket
      instead of socket?.onmessage. It will not be working,
      because when we creating instance of WebSocket,
      onmessage method is undefined
    */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, tokens, socket?.onmessage]);

  return {
    tokens,
    isLoading,
    isConnected: !!isConnected,
    hasInternetConnection,
    socket,
  };
};
