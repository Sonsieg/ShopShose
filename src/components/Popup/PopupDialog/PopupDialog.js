// @flow

import React, {Component} from 'react';
import Dialog from './components/Dialog';

class PopupDialog extends Component {
  props;

  dialog;

  show(onShown) {
    this.dialog.show(onShown);
  }

  dismiss(onDismissed) {
    this.dialog.dismiss(onDismissed);
  }

  render() {
    return (
      <Dialog
        ref={dialog => {
          this.dialog = dialog;
        }}
        {...this.props}>
        {this.props.dialogTitle}
        {this.props.children}
      </Dialog>
    );
  }
}

export default PopupDialog;
