/**
 * Author: ziven27
 * Date: 8/15/2020
 * Desc: 弹窗组件
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import useLockScroll from './components/useLockScroll';
import Portal from './components/Portal';

/**
 * 遮罩
 * @param className
 * @param otherProps
 * @returns {JSX.Element}
 * @constructor
 */
const NuMask = ({ className = '', ...otherProps }) => (
  <button
    type="button"
    title="Mask"
    className={`nu_mask ${className}`}
    {...otherProps}
  />
);

const NuModal = React.forwardRef(function NuModal(
  {
    className = '',
    children = null,
    open = false,
    active = true,
    lockScroll = true,
    removeTime = 200,
    disabledPortal = false,
    disableEsc = false,
    onClose = () => {},
    onClickMask = () => {},
    Component = 'div',
    maskProps = {},
    ...otherProps
  },
  ref,
) {
  const [exit, setExit] = useState(false);
  const [show, setShow] = useState(null);

  useEffect(() => {
    let removeTimer;

    if (open) {
      setExit(true);
      /**
       *  After exit and add attr `open` to dialog
       *  Fot the css transition
       */
      setTimeout(() => {
        setShow(true);
      }, 16);
    } else {
      setShow(null);

      // remove dialog by removeTime
      if (removeTime > 0) {
        // hide dialog and remove dialog after removeTime
        removeTimer = setTimeout(function () {
          setExit(false);
        }, removeTime);
      } else if (removeTime === 0) {
        // remove dialog immediately
        setExit(false);
      } else {
        // keep exit after hide
      }
    }
    return () => {
      removeTimer && clearTimeout(removeTimer);
    };
  }, [open]);

  /**
   * if `true` lock the scroll when open
   */
  useLockScroll(lockScroll && open);

  /**
   * is not exit remote the dom
   */
  if (!exit) {
    return null;
  }

  const handleClickMask = (e) => {
    e.preventDefault();
    onClickMask(e) !== false && onClose();
  };

  return (
    <Portal disabled={disabledPortal}>
      <FocusTrap
        active={open && show && active}
        focusTrapOptions={{
          onDeactivate: onClose,
          escapeDeactivates: !disableEsc,
          returnFocusOnDeactivate: true,
        }}
      >
        <Component
          ref={ref}
          open={show}
          tabIndex="0"
          role="modal"
          className={`nu_modal ${className}`}
          {...otherProps}
        >
          <NuMask onClick={handleClickMask} {...maskProps} />
          {children}
        </Component>
      </FocusTrap>
    </Portal>
  );
});

NuModal.propTypes = {
  /**
   * css class
   */
  className: PropTypes.string,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node,
  /**
   * if `> 0`, hide dialog and remove dialog after removeTime
   * else if `0`, remove dialog immediately
   * else, keep exit after hide
   */
  removeTime: PropTypes.number,
  /**
   * If `true`, the dialog go through the enter, entring, enterd.
   * If `false`, the dialog go through the exitring, exitred.
   */
  open: PropTypes.bool,
  /**
   * If `true`, the dialog can focusable
   * If `false`, the dialog blur
   */
  active: PropTypes.bool,
  /**
   * Callback fired when dialog close.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, when dialog scroll into bottom the body will scroll
   */
  lockScroll: PropTypes.bool,
  /**
   * If `true`, the dialog will render where it is defined
   */
  disabledPortal: PropTypes.bool,
  /**
   * If `true`, the dialog will not close when click esc
   */
  disableEsc: PropTypes.bool,
  /**
   * Callback fired when the `Mask` is clicked.
   * if return `false`, no longer trigger onclick
   * else trigger the onClose
   */
  onClickMask: PropTypes.func,
};

export default NuModal;
