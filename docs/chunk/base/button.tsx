import React from 'react';
import MarkDown from '../../theme/components/markdown/index.tsx';

const source = require('base/button/index.md');

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
    code: require('!raw-loader!base/button/__example__/s-001-base.tsx')
      .default.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '')
      .trim(),
    component: require('base/button/__example__/s-001-base.tsx').default,
  },
  {
    propName: {
      cn: '禁用',
      en: 'Disabled',
    },
    propDescribe: {
      cn: '禁用状态',
      en: 'Disabled state',
    },
    code: require('!raw-loader!base/button/__example__/s-002-disabled.tsx')
      .default.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '')
      .trim(),
    component: require('base/button/__example__/s-002-disabled.tsx').default,
  },
  {
    propName: {
      cn: '文字按钮',
      en: 'Text',
    },
    propDescribe: {
      cn: '文字 Button 用法',
      en: 'Text Button',
    },
    code: require('!raw-loader!base/button/__example__/s-003-text.tsx')
      .default.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '')
      .trim(),
    component: require('base/button/__example__/s-003-text.tsx').default,
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
