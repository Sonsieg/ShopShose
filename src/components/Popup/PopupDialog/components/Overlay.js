// @flow

import React, {Component} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Animated} from 'react-native';

// default overlay options
const BACKGROUND_COLOR = '#000';
const OPACITY = 0.5;
const ANIMATION_DURATION = 2000;
const SHOW_OVERLAY = false;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    top: 0,
    left: 0,
    position: 'absolute',
  },
});

class Overlay extends Component {
  static defaultProps = {
    backgroundColor: BACKGROUND_COLOR,
    opacity: OPACITY,
    animationDuration: ANIMATION_DURATION,
    showOverlay: SHOW_OVERLAY,
  };

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.showOverlay !== nextProps.showOverlay) {
      const toValue = nextProps.showOverlay ? nextProps.opacity : 0;
      Animated.timing(this.state.opacity, {
        toValue,
        duration: this.props.animationDuration,
      }).start();
    }
  }

  render() {
    const {onPress, pointerEvents} = this.props;
    const backgroundColor = {backgroundColor: this.props.backgroundColor};
    const opacity = {opacity: this.state.opacity};
    const dimensions = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };

    return (
      <Animated.View
        pointerEvents={pointerEvents}
        style={[styles.overlay, backgroundColor, opacity, dimensions]}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.overlay, dimensions]}
        />
      </Animated.View>
    );
  }
}

export default Overlay;
