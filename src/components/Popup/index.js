import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PopupDialog from './PopupDialog';
import Touchable from '../Touchable';
import {Colors, Dimens, GlobalStyles} from '../../config';
import TextView from '../Text';
import {connect} from 'react-redux';
import idx from 'idx';
import {selectValueWithTheme} from '../../helpers/FunctionsHelper';
import {scale} from '../../libs/scaling';
window._popupWidth = 295;
class PopupContent extends Component {
  content = null;

  constructor() {
    super();
    this.state = {
      reload: false,
    };
  }

  reload(content) {
    this.content = content;
    this.setState({reload: !this.state.reload});
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {this.content}
      </View>
    );
  }
}

class Popup extends Component {
  static sharedInstance = null;

  constructor(props) {
    super(props);
    Popup.sharedInstance = this;
    Popup.theme = this.props.theme;
  }

  render() {
    //const scaleAnimation = new ScaleAnimation();
    return (
      <PopupDialog
        ref={ref => (this.popupDialog = ref)}
        containerStyle={{zIndex: 100}}
        //dialogAnimation={scaleAnimation}
        width={1}
        height={1}
        //animationDuration={150}
        dialogStyle={{backgroundColor: 'transparent'}}>
        <PopupContent ref={ref => (this.popupContent = ref)} />
      </PopupDialog>
    );
  }

  static buildSimpleModal(viewContent, onPressOverlay) {
    return (
      <>
        <Touchable
          style={{
            width: Dimens.screenWidth,
            height: Dimens.screenHeight,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          onPress={() => {
            onPressOverlay();
            this.dismiss();
          }}
        />
        {viewContent}
      </>
    );
  }

  static buildAdvanceHelper(
    viewContent,
    title = 'BASE_SOURCE',
    buttons = ['Ok'],
    callback = null,
    dismissFromBackground,
    isRow,
  ) {
    return (
      <>
        <Touchable
          style={{
            width: Dimens.screenWidth,
            height: Dimens.screenHeight,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          onPress={() => {
            if (dismissFromBackground) {
              if (buttons[0] !== 'OK' && buttons.length === 1 && callback) {
                callback(buttons[0]);
              }
              Popup.dismiss();
            }
          }}
        />
        <View
          style={{
            width: window._popupWidth,
            backgroundColor: selectValueWithTheme(
              Popup.theme,
              Colors.white,
              Colors.blackRussian,
            ),
            borderRadius: 10,
            ...GlobalStyles.shadow,
            overflow: 'hidden',
          }}>
          <View style={{padding: 20}}>
            <TextView
              numberOfLines={1}
              style={{
                color: selectValueWithTheme(
                  Popup.theme,
                  Colors.gray44,
                  Colors.whiteSmoke,
                ),
                fontSize: scale(16),
                textAlign: 'center',
                height: 30,
                fontWeight: 'bold',
                paddingTop: 5,
              }}>
              {title}
            </TextView>
            {viewContent}
            {buttons.length === 1 && (
              <Touchable
                onPress={() => {
                  if (callback) {
                    callback(buttons[0]);
                  }
                  Popup.dismiss();
                }}
                style={{
                  ...styles.btnOK,
                }}>
                <TextView style={{...styles.buttonTitle, ...styles.txtOk}}>
                  {buttons[0]}
                </TextView>
              </Touchable>
            )}
            {buttons.length >= 2 && (
              <View
                style={{
                  flexDirection: isRow ? 'row' : 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Touchable
                  onPress={() => {
                    if (callback) {
                      callback(buttons[0]);
                    }
                    Popup.dismiss();
                  }}
                  style={{
                    width: buttons.length === 2 ? 100 : 80,
                    ...styles.button,
                    backgroundColor: Colors.lightGray,
                  }}>
                  <TextView
                    style={{
                      ...styles.buttonTitle,
                      color: isRow ? Colors.gray20 : Colors.eucalyptus,
                    }}>
                    {buttons[0]}
                  </TextView>
                </Touchable>
                <Touchable
                  onPress={() => {
                    if (callback) {
                      callback(buttons[1]);
                    }
                    Popup.dismiss();
                  }}
                  style={{
                    //marginLeft: 8,
                    width: buttons.length === 2 ? 100 : 80,
                    ...styles.button,
                  }}>
                  <TextView style={{...styles.buttonTitle}}>
                    {buttons[1]}
                  </TextView>
                </Touchable>
                {buttons.length === 3 && (
                  <Touchable
                    onPress={() => {
                      if (callback) {
                        callback(buttons[2]);
                      }
                      Popup.dismiss();
                    }}
                    style={{
                      marginLeft: 8,
                      width: 80,
                      ...styles.button,
                    }}>
                    <TextView style={{...styles.buttonTitle}}>
                      {buttons[2]}
                    </TextView>
                  </Touchable>
                )}
              </View>
            )}
          </View>
        </View>
      </>
    );
  }

  static buildSimpleHelper(
    textContent,
    title = 'BASE_SOURCE',
    buttons = ['Ok'],
    callback = null,
    dismissFromBackground = true,
    isRow = false,
  ) {
    return Popup.buildAdvanceHelper(
      <TextView
        style={{
          paddingTop: 15,
          textAlign: 'center',
          paddingBottom: 25,
          fontSize: scale(13),
          lineHeight: scale(19.5),
          color: selectValueWithTheme(
            Popup.theme,
            Colors.gray44,
            Colors.whiteSmoke,
          ),
        }}>
        {textContent}
      </TextView>,
      title,
      buttons,
      callback,
      dismissFromBackground,
      isRow,
    );
  }

  static show(viewContent, width = 325) {
    window._popupWidth = width;
    if (Popup.sharedInstance.popupContent) {
      Popup.sharedInstance.popupContent.reload(viewContent);
    }
    if (Popup?.sharedInstance?.popupDialog) {
      Popup?.sharedInstance?.popupDialog?.show();
    }
  }

  static dismiss() {
    if (Popup.sharedInstance.popupContent) {
      Popup.sharedInstance.popupContent.reload(null);
    }
    if (Popup.sharedInstance.popupDialog) {
      Popup.sharedInstance.popupDialog.dismiss();
    }
  }
}

const styles = StyleSheet.create({
  button: {
    height: scale(42),
    backgroundColor: Colors.persimmon,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 2,
  },
  buttonTitle: {
    fontSize: scale(14),
    color: Colors.white,
  },
  btnOK: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: scale(40),
    paddingVertical: 5,
    backgroundColor: Colors.persimmon,
  },
  txtOk: {
    fontWeight: '500',
  },
});

const mapStateToProp = state => {
  return {
    theme: idx(state, x => x.stack.theme),
  };
};
export default connect(mapStateToProp)(Popup);
