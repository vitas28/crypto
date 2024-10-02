import {ReactNode} from 'react';

export interface SocketProviderProps {
  children: ReactNode;
}

export interface SocketContextValues {
  isLoading: boolean;
  hasInternetConnection: boolean;
  isConnected: boolean;
  tokens: TokenItemType[];
  handleRefreshTokenList: () => void;
}

export type TokenKeys =
  | 'A'
  | 'B'
  | 'C'
  | 'E'
  | 'F'
  | 'L'
  | 'O'
  | 'P'
  | 'Q'
  | 'a'
  | 'b'
  | 'c'
  | 'e'
  | 'h'
  | 'l'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 's'
  | 'v'
  | 'w'
  | 'x';

export type TokenItemType = Record<TokenKeys, string>;

export interface TokensEvent {
  data: string;
  isTrusted: boolean;
}
