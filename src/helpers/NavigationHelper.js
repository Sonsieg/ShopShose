import {createRef} from 'react';
import {StackActions, NavigationActions} from '@react-navigation/compat';

window._topLevelNavigator = null;

export const navigationRef = createRef();

export default class NavigationHelper {
  static setTopLevelNavigator(_ref) {
    window._topLevelNavigator = _ref;
  }

  static getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return NavigationHelper.getActiveRouteName(route);
    }
    return route.routeName;
  }

  static onNavigationStateChange(prevState, currentState, action) {
    const currentScreen = NavigationHelper.getActiveRouteName(currentState);
    const prevScreen = NavigationHelper.getActiveRouteName(prevState);
    if (prevScreen !== currentScreen) {
    }
  }

  static dispatch(component, action) {
    if (component != null && component.props.navigation) {
      component.props.navigation.dispatch(action);
    } else if (window._topLevelNavigator) {
      window._topLevelNavigator.dispatch(action);
    } else if (navigationRef.current) {
      navigationRef.current?.dispatch(action);
    } else {
      console.error('Navigation is Null');
    }
  }

  static push(routeName, params = {}, component = null) {
    let _routeName = '';
    if (!!routeName && routeName._routeName !== undefined) {
      _routeName = routeName._routeName;
    } else {
      _routeName = routeName;
    }
    const pushAction = StackActions.push({
      routeName: _routeName,
      params: {
        ...params,
      },
    });
    NavigationHelper.dispatch(component, pushAction);
  }

  static pop(n = 1, component = null) {
    const popAction = StackActions.pop({
      n,
    });
    NavigationHelper.dispatch(component, popAction);
  }

  static popToTop(component = null) {
    NavigationHelper.dispatch(component, StackActions.popToTop());
  }

  static replace(routeName, params = {}, component = null) {
    let _routeName = '';
    if (!!routeName && routeName._routeName !== undefined) {
      _routeName = routeName._routeName;
    } else {
      _routeName = routeName;
    }
    const replaceAction = StackActions.replace({
      routeName: _routeName,
      params: {
        ...params,
      },
      transitionConfig: () => ({screenInterpolator: () => null}),
    });
    NavigationHelper.dispatch(component, replaceAction);
  }

  static reset(navigation) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'BottomTabs'})],
    });
    NavigationHelper.dispatch(resetAction);
  }

  static navigate(routeName, params = {}, component = null) {
    let _routeName = '';
    if (!!routeName && routeName._routeName !== undefined) {
      _routeName = routeName._routeName;
    } else {
      _routeName = routeName;
    }
    if (component !== null) {
      if (component.props.navigation) {
        component.props.navigation.navigate(_routeName, params);
      } else {
      }
    } else {
      NavigationHelper.dispatch(
        component,
        NavigationActions.navigate({routeName: _routeName, params}),
      );
    }
  }

  static goBack(component = null) {
    NavigationHelper.dispatch(component, NavigationActions.back());
  }

  static getParams(props, key = null, defaultValue = null) {
    try {
      if (!props) {
        return defaultValue;
      }
      if (!key) {
        return props.params || defaultValue;
      } else {
        return props.params[key] || defaultValue;
      }
    } catch (e) {
      return defaultValue;
    }
  }
  static setParams(route, params) {
    try {
      if (route) {
        route.setParams(params);
      }
    } catch (e) {}
  }
  static getCurrentRouteName() {
    if (navigationRef.current.getCurrentRoute()) {
      return navigationRef.current.getCurrentRoute().name;
    }
    return;
  }
}
