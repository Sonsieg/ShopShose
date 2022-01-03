import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './helpers/NavigationHelper';
import Router from './router';

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
};
export default Root;
