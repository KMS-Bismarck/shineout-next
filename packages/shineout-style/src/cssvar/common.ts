export const va = (name: string, value: string) => {
  return `var(--${name},${value})`;
};

export const colorVar = {
  primaryColor: va('primary-color', '#197AFA'),
  primaryColorFade60: va('primary-color-fade-60', 'rgba(25,122,250,.6)'),
  primaryColorFade50: va('primary-color-fade-50', 'rgba(25,122,250,.5)'),
  primaryColorFade0: va('primary-color-fade-0', 'rgba(25,122,250,0)'),

  secondaryColor: va('secondary-color', '#666c7c'),

  successColor: va('success-color', '#52c41a'),
  successColorFade60: va('success-color-fade-60', 'rgba(82,196,26,.6)'),
  successColorFade50: va('success-color-fade-50', 'rgba(82,196,26,.5)'),
  successColorFade0: va('success-color-fade-0', 'rgba(82,196,26,0)'),

  infoColor: va('info-color', '#197AFA'),

  warningColor: va('warning-color', '#ff8c00'),
  warningColorFade60: va('warning-color-fade-60', 'rgba(255,140,0,.6)'),
  warningColorFade50: va('warning-color-fade-50', 'rgba(255,140,0,.5)'),
  warningColorFade0: va('warning-color-fade-0', 'rgba(255,140,0,0)'),

  dangerColor: va('danger-color', '#ff4d50'),
  dangerColorFade60: va('danger-color-fade-60', 'rgba(255,77,80,.6)'),
  dangerColorFade50: va('danger-color-fade-50', 'rgba(255,77,80,.5)'),
  dangerColorFade0: va('danger-color-fade-0', 'rgba(255,77,80,0)'),

  white: '#fff',
  grey100: va('grey-100', '#f4f5f8'),
  grey200: va('grey-200', '#e8ebf0'),
  grey300: va('grey-300', '#cccfd7'),
  grey500: va('grey-500', '#adb5bd'),
};

export const sizeVar = {
  fontSize: va('font-size', '14px'),
  fontSizeSmall: va('font-size-small', '12px'),
  fontSizeLarge: va('font-size-large', '16px'),
  commonLineHeight: va('common-line-height', '1.42857143'),
};
