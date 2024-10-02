import {Typography} from '@/components/atoms';
import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {TokenItemType} from '@/context/types';
import {isNumber} from '@/utils/helpers';

export const TokenItem: FC<TokenItemType> = ({s, p, P}) => {
  const formattedPrice = useMemo(() => {
    return Number.parseFloat(p).toFixed(5);
  }, [p]);

  const formattedPriceChangePercent = useMemo(() => {
    return `${Number.parseFloat(P).toFixed(2)}%`;
  }, [P]);
  return (
    <View style={styles.container}>
      <Typography weight="700">{s}</Typography>
      <Typography style={styles.price}>{formattedPrice}</Typography>
      <Typography color={isNumber(+P) && +P >= 0 ? 'green' : 'red'}>
        {formattedPriceChangePercent}
      </Typography>
    </View>
  );
};
