import React, {FC, ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import {Typography} from '../Typography';
import {styles} from './styles';

interface Props {
  disabled?: boolean;
  children: ReactNode;
  onPress?: () => void;
}

export const Button: FC<Props> = ({children, disabled, onPress}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.button}>
      <Typography>{children}</Typography>
    </TouchableOpacity>
  );
};
