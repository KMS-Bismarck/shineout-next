import { useButton } from '@sheinx/hooks';
import classNames from 'classnames';
import React from 'react';
import { ButtonProps } from './button.type';

const Button = (props: ButtonProps) => {
  const { jssStyle, className, style, children, renderInnerWrapper, ...rest } = props;

  const { getRootProps, getButtonProps, disabled, text, loading, type } = useButton({
    ...rest,
  });

  const rootClass = classNames([
    className,
    jssStyle[type || 'default'],
    jssStyle.button,
    {
      [jssStyle.disabled]: disabled,
      [jssStyle.loading]: loading,
      [jssStyle.text]: text,
    },
  ]);

  const buttonProps = getButtonProps();

  let buttonInnerEl = <span>{children}</span>;

  if (typeof renderInnerWrapper === 'function') {
    buttonInnerEl = renderInnerWrapper(children);
  }

  return (
    <button {...getRootProps({ className: rootClass, style })} {...buttonProps} type='button'>
      {buttonInnerEl}
    </button>
  );
};

export default Button;
