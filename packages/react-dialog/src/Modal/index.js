/**
 * Author: ziven27
 * Date: 8/15/2020
 * Desc: 弹窗组件
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import useLockScroll from './useLockScroll';
import NuPortal from '../Portal';

/**
 * 弹层组件
 * @param className
 * @param children
 * @param open
 * @param lockScroll
 * @param removeTime
 * @param root
 * @param disableEsc
 * @param onClose
 * @param Component
 * @param Mask
 * @param otherProps
 * @param ref
 * @returns {JSX.Element|null}
 * @constructor
 */
const NuModal = React.forwardRef(function NuModal(
  {
    className = 'nu_modal',
    children = null,
    open = false,
    lockScroll = true,
    removeTime = 200,
    root = 'nuModal',
    disableEsc = false,
    onClose = () => {},
    Component = 'dialog',
    Mask = null,
    ...otherProps
  },
  ref,
) {
  // is render in dom
  const [exit, setExit] = useState(false);

  // is visible
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
        removeTimer = setTimeout(() => {
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
      // eslint-disable-next-line no-unused-expressions
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

  return (
    <NuPortal root={root}>
      <FocusTrap
        active={open && show}
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
          role="dialog"
          className={className}
          {...otherProps}
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {typeof Mask === 'function' ? (
            <Mask onAfterClick={onClose} />
          ) : Mask ? (
            React.cloneElement(Mask, {
              onAfterClick: onClose,
            })
          ) : null}
          {children}
        </Component>
      </FocusTrap>
    </NuPortal>
  );
});

NuModal.defaultProps = {};

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
   * Callback fired when dialog close.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, when dialog scroll into bottom the body will scroll
   */
  lockScroll: PropTypes.bool,
  /**
   * All the modal will render into this dom
   * If `false`, modal will not use portal
   */
  root: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.oneOf([false]),
  ]),
  /**
   * If `true`, the dialog will not close when click esc
   */
  disableEsc: PropTypes.bool,
  /**
   * Components of modal
   */
  Component: PropTypes.node,
  /**
   * Components of Mask
   */
  Mask: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default NuModal;
