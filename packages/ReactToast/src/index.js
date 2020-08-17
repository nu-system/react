import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

function NuToast({
  children,
  className = '',
  open,
  status = false,
  showTime = 3000,
  appear = true,
  unmountOnExit = true,
  timeout = 300,
  classNames = {
    appearActive: '_open',
    appearDone: '_open',
    enter: '_open',
    enterActive: '_open',
    enterDone: '_open',
  },
  ...otherProps
}) {
  const [exist, setExist] = useState(!!open);

  useEffect(() => {
    if (showTime) {
      setTimeout(() => {
        setExist(false);
      }, showTime);
    }
  }, [showTime]);

  const statusClass = status ? `_${status}` : '';

  return ReactDOM.createPortal(
    <CSSTransition
      in={exist}
      className={`nu_toast ${className} ${statusClass}`}
      classNames={classNames}
      timeout={timeout}
      {...{ appear, unmountOnExit }}
      {...otherProps}
    >
      <div>
        <div className="nu_toast_in">
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.body,
  );
}

function NuToastRenderToDom({ children, ...otherProps }) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  // I don't known why not can i use ReactDOM.createPortal here
  ReactDOM.render(
    <NuToast
      {...otherProps}
      open
      appear
      unmountOnExit
      onExited={() => {
        document.body.removeChild(container);
      }}
    >
      {children}
    </NuToast>,
    container,
  );
}

NuToast.propTypes = {
  /** dom 元素 */
  children: PropTypes.node,
  /** className */
  className: PropTypes.string,
  /** 是否显示弹窗 */
  open: PropTypes.bool,
  /** toast状态 */
  status: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** 弹窗显示时间 */
  showTime: PropTypes.number,
};

NuToast.setDefault = ({ status = ['danger', 'warning', 'success'], ...defaultProps }) => {
  // you can use like this NuToast('hello!');
  const api = (text) => {
    NuToastRenderToDom({
      ...defaultProps,
      children: text,
    });
  };

  // you can use like this NuToast.danger('hello!');
  status.map((item) => {
    api[item] = (text) => {
      NuToastRenderToDom({
        ...defaultProps,
        children: text,
        status: item,
      });
    };
    return item;
  });
  return api;
};

export default NuToast;
