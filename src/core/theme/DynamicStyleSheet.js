import {StyleSheet} from 'react-native';
import DynamicValue from './DynamicValue';
import Themes from './Themes';

const parseStylesFor = (dynamicStyles, mode) => {
  const newStyles = {};
  for (const i in dynamicStyles) {
    const style = dynamicStyles[i];
    const newStyle = {};
    for (const item in style) {
      const value = style[item];
      newStyle[item] = value instanceof DynamicValue ? value[mode] : value;
    }
    newStyles[i] = newStyle;
  }
  return newStyles;
};

class DynamicStyleSheet {
  constructor(dynamicStyles) {
    this[Themes.darkTheme] = StyleSheet.create(
      parseStylesFor(dynamicStyles, Themes.darkTheme),
    );
    this[Themes.lightTheme] = StyleSheet.create(
      parseStylesFor(dynamicStyles, Themes.lightTheme),
    );
  }
}

export default DynamicStyleSheet;
