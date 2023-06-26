/**
 * cn - 基本用法
 *    --基础 Button 用法
 * en - Base
 *    --Base Button
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
        <Button jssStyle={jssStyle}>Default</Button>

        <Button jssStyle={jssStyle} type='primary'>
          Primary
        </Button>
        <Button jssStyle={jssStyle} type='success'>
          Success
        </Button>
        <Button jssStyle={jssStyle} type='danger'>
          Danger
        </Button>
        <Button jssStyle={jssStyle} type='warning'>
          Warning
        </Button>
        <Button jssStyle={jssStyle} type='secondary'>
          Secondary
        </Button>
      </div>
    </div>
  );
};
