// @flow
import * as React from 'react';
import { ReactNode, Children, cloneElement, useRef } from 'react';
import { useInputStyle } from '@shined/shineout-style';
import classNames from 'classnames';

type Props = {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: 'small' | 'large' | 'default';
  disabled?: boolean;
};
export default (props: Props) => {
  const jssStyle = useInputStyle();
  const [focus, setFocus] = React.useState(false);
  const ref = useRef({
    eventMap: new Map(),
    propsMap: new Map(),
  });
  const getEvent = (child: React.ReactElement) => {
    if (!['ShineoutInput'].includes((child?.type as any)?.displayName)) return {};
    ref.current.propsMap.set(child, {
      onFocus: child.props.onFocus,
      onBlur: child.props.onBlur,
    });
    if (!ref.current.eventMap.get(child)) {
      ref.current.eventMap.set(child, {
        onFocus: (...args: any) => {
          setFocus(true);
          ref.current.propsMap.get(child)?.onFocus?.(args);
        },
        onBlur: (...args: any) => {
          setFocus(false);
          ref.current.propsMap.get(child)?.onBlur?.(args);
        },
      });
    }
    return ref.current.eventMap.get(child) || {};
  };

  const { children, className, style, size, disabled } = props;
  const rootClass = classNames({
    [jssStyle.group]: true,
    [jssStyle.groupSmall]: size === 'small',
    [jssStyle.groupLarge]: size === 'large',
    [jssStyle.groupFocus]: size === 'large',
    [jssStyle.groupDisabled]: !!disabled,
    [className!]: !!props.className,
    [jssStyle.groupFocus]: focus,
  });
  console.log('focus', focus);
  return (
    <div className={rootClass} style={style}>
      {Children.toArray(children).map((child, i) => {
        if (typeof child === 'string') {
          return <span key={i}>{child}</span>;
        }
        if (React.isValidElement(child)) {
          return cloneElement(child, { ...getEvent(child), disabled });
        }
        return <span key={i}>{child}</span>;
      })}
    </div>
  );
};
