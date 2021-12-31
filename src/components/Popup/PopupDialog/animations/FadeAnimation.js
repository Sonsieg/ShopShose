import {Animated} from 'react-native';
import Animation from './Animation';

export default class FadeAnimation extends Animation {
  animate;
  animationDuration;

  constructor({toValue = 0, animationDuration = 200}) {
    super(toValue);

    this.animationDuration = animationDuration;
  }

  toValue(toValue) {
    Animated.timing(this.animate, {
      toValue,
      duration: this.animationDuration,
    }).start();
  }

  createAnimations() {
    return {opacity: this.animate};
  }
}
