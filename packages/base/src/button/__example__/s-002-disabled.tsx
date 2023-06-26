/**
 * cn - 禁用
 *    -- 禁用状态
 * en - Disabled
 *    -- Disabled state
 */

import React from 'react';
import { Button } from '@sheinx/base';
import { useButtonStyle } from '@sheinx/shineout-style';

export default () => {
  const jssStyle = useButtonStyle();

  return (
    <div>
      <div>base</div>
      <div>
        <Button jssStyle={jssStyle} disabled>
          SHEIN
        </Button>
      </div>
    </div>
  );
};
