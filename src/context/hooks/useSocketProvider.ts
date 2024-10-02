import {useContext} from 'react';
import {SocketContext} from '../index';

export const useSocketContext = () => {
  return useContext(SocketContext);
};
