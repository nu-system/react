import * as React from 'react';

export interface ComponentProps {
  Component?: React.ReactNode;
  children?: React.ReactNode;
  className?: String;
  onClose?: () => {};
  activeTime?: number;
  removeTime?: number;
  open?: boolean;
  lockScroll?: boolean;
  disableEsc?: boolean;
  forceRender?: boolean;
  root?: string | false | HTMLElement;
}

declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
