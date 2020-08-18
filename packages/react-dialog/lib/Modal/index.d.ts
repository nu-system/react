import * as React from 'react';
export interface ComponentProps {
  children?: React.ReactNode;
  className?: String;
  open?: boolean;
  onClose?: () => {};
  Component?: React.ReactNode | React.Component;
  Mask?: React.ReactNode | React.Component;
  removeTime?: number;
  lockScroll?: boolean;
  disableEsc?: boolean;
  root?: string | false | HTMLElement;
}
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
