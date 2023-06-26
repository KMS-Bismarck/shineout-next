import * as React from 'react';
import useForkRef from '../../common/use-fork-ref';
import { HandlerType, ObjectType } from '../../common/type';
import { extractEventHandlers } from '../../utils';
import { BaseButtonProps, UseButtonRootSlotProps, UseButtonSlotProps } from './use-button.type';

const useButton = (props: BaseButtonProps = {}) => {
  const {
    htmlType,
    loading,
    text,
    space,
    href,
    target,
    buttonRef: buttonRefPo,
    disabled,
    onClick,
    type,
    ...propsToForward
  } = props;

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleButtonRef = useForkRef(buttonRef, buttonRefPo);

  /**
   * 点击事件
   *
   * @param otherHandlers 外部传入的事件
   * @returns 点击事件
   */
  const handleClick =
    (otherHandlers: HandlerType) => (event: React.MouseEvent<HTMLButtonElement>) => {
      buttonRef.current?.click();
      onClick?.(event);
      otherHandlers?.onClick?.(event);
    };

  /**
   * 获取包含外部传入以及内部定义的的 props
   *
   * @param externalProps 外部传入的 props
   * @returns 所有的 props
   */
  const getRootProps = <TOther extends ObjectType = ObjectType>(
    externalProps: TOther = {} as TOther,
  ): UseButtonRootSlotProps => {
    const externalEventHandlers = extractEventHandlers(externalProps);

    return {
      ...externalProps,
      onClick: handleClick(externalEventHandlers),
    };
  };

  /**
   * 获取包含外部传入以及内部定义的的 props
   *
   * @param externalProps 外部传入的 props
   * @returns 所有的 props
   */
  const getButtonProps = <TOther extends ObjectType = ObjectType>(
    externalProps: TOther = {} as TOther,
  ): UseButtonSlotProps<TOther> => {
    const externalEventHandlers = {
      ...extractEventHandlers(externalProps),
    };

    const mergedEventHandlers = {
      ...propsToForward,
      ...externalProps,
      type,
      text,
      space,
      href,
      target,
      loading,
      htmlType,
      disabled,
      onClick: handleClick(externalEventHandlers),
    };

    return {
      ...mergedEventHandlers,
      ref: handleButtonRef,
    };
  };

  return {
    type,
    disabled,
    loading,
    getRootProps,
    getButtonProps,
  };
};

export default useButton;
