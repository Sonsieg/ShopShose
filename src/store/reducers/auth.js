import Types from '../types';

const initialState = {
  userInfo: null,
  firstOpen: true,
  checkNotifi: false,
  firstInstalled: true,
  listPlan: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.Auth.UPDATE_USER_INFO: {
      return {
        ...state,
        userInfo: {...state.userInfo, ...action.payload},
      };
    }

    case Types.Auth.CLEAR_DATA_AUTH: {
      return {
        userInfo: null,
      };
    }

    case Types.Auth.SET_STATE_SPLASH: {
      return {
        ...state,
        firstOpen: action.payload || false,
      };
    }

    case Types.Auth.UPDATE_LIST_PLAN: {
      return {
        ...state,
        listPlan: action.list,
      };
    }

    case Types.Auth.CLEAR_LIST_PLAN: {
      return {
        ...state,
        listPlan: [],
      };
    }

    default:
      return state;
  }
};
