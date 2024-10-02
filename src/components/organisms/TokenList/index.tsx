import React, {FC} from 'react';
import {View} from 'react-native';
import {TokenItem} from '@/components/molecules';
import {TokenItemType} from '@/context/types';
import {styles} from './styles';

interface Props {
  tokens: TokenItemType[];
}

export const TokenList: FC<Props> = ({tokens}) => {
  return (
    <View style={styles.container}>
      {tokens.map(item => (
        <TokenItem key={item.s} {...item} />
      ))}
    </View>
  );
};
