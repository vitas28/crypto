import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

export const Loader: FC = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" />
  </View>
);
