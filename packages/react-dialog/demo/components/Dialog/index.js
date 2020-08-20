import React from 'react';
import { NuDialog, NuMask, NuModal, NuClose } from '../../../src';
import '@_nu/css-dialog';
import '@_nu/css-dialog/lib/skins/middle.css';
import '@_nu/css-dialog/lib/skins/top.css';
import '@_nu/css-dialog/lib/skins/left.css';
import '@_nu/css-dialog/lib/skins/bottom.css';
import '@_nu/css-dialog/lib/skins/right.css';
import './style.css';

// eslint-disable-next-line react/prop-types
function Dialog({ children, onClose, className = '', ...otherProps }) {
  return (
    <NuModal
      className={`nu_modal ${className}`}
      onClose={onClose}
      {...otherProps}
    >
      <NuMask onClick={onClose} />
      <NuDialog>
        {children}
        <NuClose onClick={onClose} />
      </NuDialog>
    </NuModal>
  );
}

export default Dialog;
