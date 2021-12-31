import Themes from './Themes';
class DynamicValue {
  constructor(light, dark) {
    this[Themes.lightTheme] = light;
    this[Themes.darkTheme] = dark;
  }
}
export default DynamicValue;
