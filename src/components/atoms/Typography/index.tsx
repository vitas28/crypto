import {COLORS} from '@/utils/colors';
import React, {FC, ReactNode} from 'react';
import {Text as BaseText, TextProps, TextStyle} from 'react-native';

interface TypographyProps extends TextProps {
  children: ReactNode;
  size?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  line?: TextStyle['lineHeight'];
  align?: TextStyle['textAlign'];
  color?: keyof typeof COLORS;
}

export const Typography: FC<TypographyProps> = ({
  children,
  size = 18,
  color = 'white',
  weight = '400',
  style,
  line,
  align,
  ...props
}) => {
  const preDefinedStyles: TextStyle = {
    ...(color ? {color} : {}),
    ...(size ? {fontSize: size} : {}),
    ...(weight ? {fontWeight: weight} : {}),
    ...(line ? {lineHeight: line} : {}),
    ...(align ? {textAlign: align} : {}),
  };

  return (
    <BaseText style={[preDefinedStyles, style]} {...props}>
      {children}
    </BaseText>
  );
};
