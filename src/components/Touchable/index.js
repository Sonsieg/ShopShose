import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Flow, Wander} from 'react-native-animated-spinkit';
import NetInfo from '@react-native-community/netinfo';
import {Colors} from '../../config';
import {showAlert} from '../../helpers/FunctionsHelper';
import {scale} from '../../libs/scaling';

const Touchable = React.forwardRef(({...props}, ref) => {
  const {
    style,
    activeOpacity,
    onPress,
    onLongPress,
    loading,
    disable,
    preCheckInternet = false,
    eventName,
    spinSize = scale(20),
    spinColor = Colors.white,
  } = props;
  return (
    <TouchableOpacity
      ref={ref}
      disabled={disable || loading}
      style={[
        {
          opacity: disable ? 0.4 : 1,
        },
        style,
      ]}
      activeOpacity={activeOpacity ? activeOpacity : 0.9}
      onLongPress={() => {
        if (onLongPress) {
          onLongPress();
        }
      }}
      onPress={() => {
        if (!preCheckInternet) {
          if (onPress && !loading) {
            onPress();
            if (eventName) {
              // FcmHelper.logEvent('V1_' + props.eventName, eventParams);
            }
          }
        } else {
          NetInfo.fetch().then(state => {
            if (state.isConnected) {
              onPress();
            } else {
              showAlert('', 'no_internet', () => {});
            }
          });
        }
      }}>
      {!loading && props.children}
      {loading && (
        <Wander
          style={{alignSelf: 'center', paddingTop: spinSize / 3}}
          isVisible={true}
          size={spinSize}
          color={spinColor}
        />
      )}
    </TouchableOpacity>
  );
});

export default Touchable;
