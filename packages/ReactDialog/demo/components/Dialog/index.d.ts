import * as React from 'react';

interface ComponentProps {
  children?: React.ReactNode;
  className?: String;
  open?: boolean;
  onClose?: () => {};
}

declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
