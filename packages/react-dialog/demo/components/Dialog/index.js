import React from 'react';
import NuDialog, { NuMask, NuModal, NuClose } from '../../../src/index';
import '@_nu/css-dialog';
import '@_nu/css-dialog/lib/skins/middle.css';
import '@_nu/css-dialog/lib/skins/top.css';
import '@_nu/css-dialog/lib/skins/left.css';
import '@_nu/css-dialog/lib/skins/bottom.css';
import '@_nu/css-dialog/lib/skins/right.css';
import './style.css';

// eslint-disable-next-line react/prop-types
function Dialog({ children, ...otherProps }) {
  return (
    <NuModal Mask={NuMask} {...otherProps}>
      <NuDialog>
        {children}
        <NuClose onClick={otherProps.onClose} />
      </NuDialog>
    </NuModal>
  );
}

export default Dialog;
