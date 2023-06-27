import { useButton } from '@sheinx/hooks';
import classNames from 'classnames';
import React from 'react';
import { ButtonProps } from './button.type';

const Button = (props: ButtonProps) => {
  const { jssStyle, className, style, children, renderInnerWrapper, ...rest } = props;

  const { getRootProps, getButtonProps, disabled, text, loading, size, type, htmlType } = useButton(
    {
      ...rest,
    },
  );

  const rootClass = classNames([
    className,
    jssStyle[type || 'default'],
    jssStyle.button,
    {
      [jssStyle.disabled]: disabled,
      [jssStyle.loading]: loading,
      [jssStyle.text]: text,
      [jssStyle.small]: size === 'small',
      [jssStyle.large]: size === 'large',
    },
  ]);

  const buttonProps = getButtonProps();

  let buttonInnerEl: React.ReactNode = <span>{children}</span>;

  if (typeof renderInnerWrapper === 'function') {
    buttonInnerEl = renderInnerWrapper(children);
  }

  let loadingEl: React.ReactNode = null;

  if (loading) {
    // Spin 组件，待实现后替换
    loadingEl = <span>Spin</span>;
  }

  return (
    <button
      {...getRootProps({ className: rootClass, style })}
      {...buttonProps}
      // eslint-disable-next-line react/button-has-type
      type={htmlType}
    >
      {loadingEl}
      {buttonInnerEl}
    </button>
  );
};

export default Button;
