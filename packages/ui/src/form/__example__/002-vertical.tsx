import { Input, Form } from '@shined/ui';
import { useInputStyle, useFormStyle, useFormItemStyle } from '@shined/shineout-style';
import React from 'react';
export default () => {
  const inputStyle = useInputStyle();
  const formStyle = useFormStyle();
  const itemStyle = useFormItemStyle();
  return (
    <div>
      <Form jssStyle={formStyle} defaultValue={{ email: 'spana@qq.com' }} labelAlign={'top'}>
        <Form.Item label={'username'} tip={'请输入用户名'} jssStyle={itemStyle}>
          <Form.Field
            name={'name'}
            onChange={(v) => {
              console.log('input change', v);
            }}
          >
            <Input jssStyle={inputStyle} clearable placeholder='please input name' />
          </Form.Field>
        </Form.Item>
        <Form.Item label={'email'} jssStyle={itemStyle}>
          <Form.Field
            name={'email'}
            onChange={(v?: string) => {
              console.log('input change', v);
            }}
          >
            {({ value, onChange }) => (
              <Input
                value={value}
                onChange={onChange}
                jssStyle={inputStyle}
                clearable
                placeholder='please input email'
              />
            )}
          </Form.Field>
        </Form.Item>
        <button type={'submit'}>提交</button>
        <button type={'reset'}>重置</button>
      </Form>
    </div>
  );
};
