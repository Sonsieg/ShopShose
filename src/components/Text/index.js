import React from 'react';
import {Text as BaseText} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../config';

import {
  createDynamicStyle,
  createDynamicValue,
  useDynamicStyleSheet,
} from '../../core/theme';
import {scale} from '../../libs/scaling';

export default ({style, ...rest}) => {
  const theme = useSelector(state => state.stack.theme);
  const styles = useDynamicStyleSheet(dynamicStyles, theme);

  return (
    <BaseText allowFontScaling={false} style={[styles.text, style]} {...rest} />
  );
};

const dynamicStyles = createDynamicStyle({
  text: {
    color: createDynamicValue(Colors.textBlack, Colors.textWhite),
    fontSize: scale(16),
  },
});
