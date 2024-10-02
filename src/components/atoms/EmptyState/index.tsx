import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Typography} from '../Typography';

interface Props {
  text: string;
}

export const EmptyState: FC<Props> = ({text}) => (
  <View style={styles.loader}>
    <Typography align="center" weight="600" size={30}>
      {text}
    </Typography>
  </View>
);
