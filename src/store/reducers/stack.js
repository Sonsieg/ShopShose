import {Appearance} from 'react-native';
import Types from '../types';

const initialState = {
  theme: Appearance.getColorScheme(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.Stack.CHANGE_THEME_MODE: {
      return {
        ...state,
        theme: action.theme,
      };
    }

    default:
      return state;
  }
};
