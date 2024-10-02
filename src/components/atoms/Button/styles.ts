import {COLORS} from '@/utils/colors';
import {spacing} from '@/utils/spacing';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: spacing.m,
  },
});
