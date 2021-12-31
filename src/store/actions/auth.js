import Types from '../types';
import store from '../index';
import idx from 'idx';

export const clearAllDataAuth = () => {
  return {
    type: Types.Auth.CLEAR_DATA_AUTH,
  };
};
export const updateUserInfo = payload => {
  return {
    type: Types.Auth.UPDATE_USER_INFO,
    payload,
  };
};
export const setStateSplashScreen = payload => {
  return {
    type: Types.Auth.SET_STATE_SPLASH,
    payload,
  };
};
export const clearDataAuth = payload => {
  return {
    type: Types.Auth.CLEAR_DATA_AUTH,
    payload,
  };
};
export const updateListPlan = List => {
  const state = store.getState();
  const createDate = new Date();
  const list = idx(state, x => x.auth.listPlan) || [];

  if (list.length < 10) {
    list.push({List, create_date: createDate});
  } else {
    list[list.length - 1] = {List, create_date: createDate};
  }

  list.sort(function (a, b) {
    return new Date(b.create_date) - new Date(a.create_date);
  });
  return {
    type: Types.Auth.UPDATE_LIST_PLAN,
    list,
  };
};
export const clearListPlan = payload => {
  return {
    type: Types.Auth.CLEAR_LIST_PLAN,
    payload,
  };
};
