import * as React from 'react';
export interface ComponentProps {
  children?: React.ReactNode;
  className?: String;
  Component?: React.ReactNode | React.Component;
  Mask?: React.ReactNode | React.Component;
  removeTime?: number;
  open?: boolean;
  onClose?: () => {};
  lockScroll?: boolean;
  disableEsc?: boolean;
}
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
