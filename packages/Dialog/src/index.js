import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import useLockScroll from './components/useLockScroll';
import Portal from './components/Portal';
import Root from './components/Root';

/**
 * All the dialog element will append in this node
 */
const nodeDialogRoot = new Root();

const Dialog = React.forwardRef(
  (
    {
      className = '',
      children = null,
      open = false,
      active = true,
      lockScroll = true,
      maskTitle = 'Mask',
      removeTime = 200,
      disabledPortal = false,
      disableEsc = false,
      closeTitle = 'Close',
      closeChildren = <Fragment>&times;</Fragment>,
      onClose = () => {},
      onClickMask = () => {},
      ...otherProps
    },
    ref,
  ) => {
    const [exit, setExit] = useState(false);
    const [hide, setHide] = useState(true);

    useEffect(() => {
      let removeTimer;

      if (open) {
        setExit(true);
        /**
         *  After exit and add attr `open` to dialog
         *  Fot the css transition
         */
        setTimeout(() => {
          setHide(false);
        }, 16);
      } else {
        setHide(true);

        // remove dialog by removeTime
        if (removeTime > 0) {
          // hide dialog and remove dialog after removeTime
          removeTimer = setTimeout(function() {
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

    return (
      <Portal disabled={disabledPortal} container={nodeDialogRoot}>
        <FocusTrap
          active={open && !hide && active}
          focusTrapOptions={{
            onDeactivate: onClose,
            escapeDeactivates: !disableEsc,
            returnFocusOnDeactivate: true,
          }}
        >
          <dialog
            ref={ref}
            open={!hide}
            role="dialog"
            tabIndex={-1}
            className={`nu_dialog_wrap ${className}`}
            {...otherProps}
          >
            {!!maskTitle && (
              <button
                type="button"
                className="nu_dialog_mask"
                title={maskTitle}
                onClick={e => onClickMask(e) !== false && onClose()}
              />
            )}
            <section role="document" className="nu_dialog">
              {!!closeTitle && (
                <button
                  aria-label={closeTitle}
                  type="button"
                  className="nu_dialog_close"
                  title={closeTitle}
                  onClick={onClose}
                  tabIndex={0}
                >
                  {closeChildren}
                </button>
              )}
              {children}
            </section>
          </dialog>
        </FocusTrap>
      </Portal>
    );
  },
);

Dialog.propTypes = {
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
   * Callback fired when the `Mask` is clicked.
   * if return `false`, no longer trigger onclick
   * else trigger the onClose
   */
  onClickMask: PropTypes.func,
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
   * title of the `Close`.
   * If empty string, the `Close` do not render
   */
  closeTitle: PropTypes.string,
  /**
   * title of the mask element.
   * If empty string, the mask do not render
   */
  maskTitle: PropTypes.string,
  /**
   * Close children
   */
  closeChildren: PropTypes.node,
};

export default Dialog;
