import DynamicStyleSheet from './DynamicStyleSheet';
import DynamicValue from './DynamicValue';
import useDynamicStyleSheet from './useDynamicStyleSheet';

const createDynamicValue = (light, dark) => new DynamicValue(light, dark);

const createDynamicStyle = dynamicStyles =>
  new DynamicStyleSheet(dynamicStyles);

export default {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
  createDynamicValue,
  createDynamicStyle,
};

export {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
  createDynamicValue,
  createDynamicStyle,
};
