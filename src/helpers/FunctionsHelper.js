import moment from 'moment';
import React from 'react';
import {DeviceInfo} from 'react-native-device-info';
import idx from 'idx';
import {Popup} from '../components';
import {scale} from '../libs/scaling';

const responseSuccess = response => {
  const status = idx(response, x => x.status);
  const data = idx(response, x => x.data);
  if (status === 200 || status === 201) {
    return true;
  }
  if (data === undefined) {
    return false;
  }

  return false;
};

const getUniqueIdDevice = () => {
  try {
    return DeviceInfo.getUniqueId();
  } catch (err) {
    return 'XXXXXXXXX';
  }
};

const numberWithCommas = stringNumber =>
  stringNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const log = obj => {
  if (__DEV__) {
    console.tron.log(obj);
  }
};

const logImportant = obj => {
  if (__DEV__) {
    console.tron.logImportant(obj);
  }
};

const keyExtractor = (item, index) => {
  return index.toString();
};

const isObject = value => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

const throttle = (func, wait, options) => {
  let context, args, result;
  let timeout = null;
  let previous = 0;
  if (!options) {
    options = {};
  }
  let later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  return function () {
    let now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    let remaining = wait - (now - previous);
    // eslint-disable-next-line consistent-this
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const showFullModal = (viewContent, onPressOverlay) => {
  Popup.show(Popup.buildSimpleModal(viewContent, onPressOverlay));
};

const showAlert = (
  title,
  message,
  callback = null,
  dismissFromBackground = true,
  button_title,
) => {
  Popup.show(
    Popup.buildSimpleHelper(
      message,
      title || 'Remind Plan',
      [button_title || 'OK'],
      callback,
      dismissFromBackground,
    ),
  );
};

const showConfirm = (
  title,
  message,
  button_title_0,
  button_title_1,
  callback = null,
  dismissFromBackground = true,
  isRow = true,
) => {
  Popup.show(
    Popup.buildSimpleHelper(
      message,
      title || 'Remind Plan',
      [button_title_0, button_title_1],
      callback,
      dismissFromBackground,
      isRow,
    ),
  );
};

const dismissPopup = () => {
  Popup.dismiss();
};

const showNotifyMessage = (
  title,
  message,
  autoHide = true,
  callback = null,
) => {
  showMessage({
    message: title || 'BASE_SOURCE',
    description: message || '',
    autoHide: autoHide,
    duration: 2000,
    type: 'default',
    onPress: () => {
      if (callback) {
        callback();
      }
    },
  });
};

const selectValueWithTheme = (theme, white, dark) => {
  return theme === 'dark' ? dark : white;
};

export {
  getUniqueIdDevice,
  numberWithCommas,
  log,
  isObject,
  logImportant,
  responseSuccess,
  keyExtractor,
  debounce,
  throttle,
  showAlert,
  showConfirm,
  showFullModal,
  showNotifyMessage,
  dismissPopup,
  selectValueWithTheme,
};

const FunctionsHelper = {
  getUniqueIdDevice,
  numberWithCommas,
  log,
  isObject,
  logImportant,
  responseSuccess,
  keyExtractor,
  debounce,
  throttle,
  showAlert,
  showConfirm,
  showFullModal,
  showNotifyMessage,
  dismissPopup,
  selectValueWithTheme,
};

export default FunctionsHelper;
