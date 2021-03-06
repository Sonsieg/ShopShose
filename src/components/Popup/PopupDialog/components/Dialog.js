// @flow

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  BackAndroid as RNBackAndroid,
  BackHandler as RNBackHandler,
} from 'react-native';

import Overlay from './Overlay';
import FadeAnimation from '../animations/FadeAnimation';

const BackHandler = RNBackHandler || RNBackAndroid;

// dialog states
const DIALOG_OPENING = 'opening';
const DIALOG_OPENED = 'opened';
const DIALOG_CLOSING = 'closing';
const DIALOG_CLOSED = 'closed';

// default dialog config
const DEFAULT_ANIMATION_DURATION = 150;
const DEFAULT_WIDTH = Dimensions.get('window').width;
const DEFAULT_HEIGHT = 300;
const DISMISS_ON_TOUCH_OUTSIDE = true;
const DISMISS_ON_HARDWARE_BACK_PRESS = true;
const HAVE_OVERLAY = true;

// event types
const HARDWARE_BACK_PRESS_EVENT = 'hardwareBackPress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  dialog: {
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  hidden: {
    top: -10000,
    left: 0,
    height: 0,
    width: 0,
  },
});

class Dialog extends Component {
  static defaultProps = {
    containerStyle: null,
    animationDuration: DEFAULT_ANIMATION_DURATION,
    dialogAnimation: new FadeAnimation({
      animationDuration: DEFAULT_ANIMATION_DURATION,
    }),
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    dismissOnTouchOutside: DISMISS_ON_TOUCH_OUTSIDE,
    dismissOnHardwareBackPress: DISMISS_ON_HARDWARE_BACK_PRESS,
    haveOverlay: HAVE_OVERLAY,
    onShown: () => {},
    onDismissed: () => {},
    onOverlayPressProps: undefined,
    show: false,
  };

  state = {
    dialogState: DIALOG_CLOSED,
  };

  componentDidMount() {
    const {show} = this.props;
    if (show) {
      this.show();
    }
    BackHandler.addEventListener(
      HARDWARE_BACK_PRESS_EVENT,
      this.hardwareBackEventHandler,
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.show !== nextProps.show) {
      if (nextProps.show) {
        this.show();
        return;
      }
      this.dismiss();
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      HARDWARE_BACK_PRESS_EVENT,
      this.hardwareBackEventHandler,
    );
  }

  onOverlayPress = () => {
    const {dismissOnTouchOutside, onOverlayPressProps} = this.props;
    if (dismissOnTouchOutside) {
      if (onOverlayPressProps) {
        onOverlayPressProps();
      } else {
        this.dismiss();
      }
    }
  };

  setDialogState(toValue, callback = () => {}) {
    const {animationDuration, dialogAnimation} = this.props;
    let dialogState = toValue ? DIALOG_OPENING : DIALOG_CLOSING;

    // to make sure has passed the dialogAnimation prop and the dialogAnimation has toValue method
    if (dialogAnimation && dialogAnimation.toValue) {
      dialogAnimation.toValue(toValue);
    }

    this.setState({dialogState});

    setTimeout(() => {
      dialogState =
        dialogState === DIALOG_CLOSING ? DIALOG_CLOSED : DIALOG_OPENED;
      this.setState({dialogState}, () => {
        callback();
      });
    }, animationDuration);
  }

  get pointerEvents() {
    if (this.props.overlayPointerEvents) {
      return this.props.overlayPointerEvents;
    }
    return this.state.dialogState === DIALOG_OPENED ? 'auto' : 'none';
  }

  get dialogSize() {
    const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
    let {width, height} = this.props;
    if (width && width > 0.0 && width <= 1.0) {
      width *= screenWidth;
    }
    if (height && height > 0.0 && height <= 1.0) {
      height *= screenHeight;
    }
    return {width, height};
  }

  show = (callback = () => {}) => {
    const {onShown} = this.props;
    callback();
    if (![DIALOG_OPENING, DIALOG_OPENED].includes(this.state.dialogState)) {
      this.setDialogState(1, onShown);
    }
  };

  dismiss = (callback = () => {}) => {
    const {onDismissed} = this.props;
    callback();
    if (![DIALOG_CLOSING, DIALOG_CLOSED].includes(this.state.dialogState)) {
      this.setDialogState(0, onDismissed);
    }
  };

  hardwareBackEventHandler = () => {
    const {dismissOnHardwareBackPress} = this.props;
    const {dialogState} = this.state;
    if (dismissOnHardwareBackPress && dialogState === DIALOG_OPENED) {
      this.dismiss();
      return true;
    }
    return false;
  };

  render() {
    const dialogState = this.state.dialogState;
    const hidden = dialogState === DIALOG_CLOSED && styles.hidden;
    const isShowOverlay =
      [DIALOG_OPENING, DIALOG_OPENED].includes(dialogState) &&
      this.props.haveOverlay;
    const {width, height} = Dimensions.get('window');
    const containerSize = {width, height};

    return (
      <View
        style={[
          styles.container,
          hidden,
          containerSize,
          this.props.containerStyle,
        ]}>
        <Overlay
          pointerEvents={this.pointerEvents}
          showOverlay={isShowOverlay}
          onPress={this.onOverlayPress}
          backgroundColor={this.props.overlayBackgroundColor}
          opacity={this.props.overlayOpacity}
          animationDuration={this.props.animationDuration}
        />
        <Animated.View
          style={[
            styles.dialog,
            this.dialogSize,
            this.props.dialogStyle,
            this.props.dialogAnimation.animations,
          ]}>
          {this.props.children}
          {this.props.actions}
        </Animated.View>
      </View>
    );
  }
}

export default Dialog;
