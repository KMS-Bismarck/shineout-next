import React from 'react';
import MarkDown from '../../theme/components/markdown/index.tsx';

const source = require('shineout/button/index.md');

export const api = [];

export const header = {
  name: 'Button',
  group: 'Other',
};

export const title = {
  cn: 'Button 标题',
  en: 'Button',
};

export const describe = {
  cn: 'Button 描述',
  en: 'Button Describe',
};

export const examples = [
  {
    propName: {
      cn: '基本用法',
      en: 'Base',
    },
    propDescribe: {
      cn: '基础 Button 用法',
      en: 'Base Button',
    },
    code: require('!raw-loader!shineout/button/__example__/s-001-base.tsx')
      .default.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '')
      .trim(),
    component: require('shineout/button/__example__/s-001-base.tsx').default,
  },
];

export default (props) => (
  <MarkDown
    {...props}
    source={source}
    header={header}
    title={title}
    describe={describe}
    examples={examples}
    api={api}
  />
);
