import { va, sizeVar, colorVar } from './common';

function animation(start: string, middle: string, end: string) {
  return {
    '0%': {
      boxShadow: `0 0 0 0 ${start}`,
    },
    '50%': {
      boxShadow: `0 0 0 0.4em ${middle}`,
    },
    '100%': {
      boxShadow: `0 0 0 0.8em ${end}`,
    },
  };
}

export default {
  buttonNearlyMargin: va('button-nearly-margin', '8px'),

  buttonBorderRadius: 4,
  buttonDefaultPaddingX: va('button-default-padding-x', '8px'),
  buttonDefaultPaddingY: va('button-default-padding-y', '5px'),
  buttonDefaultFontSize: va('button-default-font-size', sizeVar.fontSize),
  buttonDefaultLineHeight: va('button-default-line-height', sizeVar.commonLineHeight),

  // default button
  buttonDefaultColor: va('button-default-color', '#333e59'),
  buttonDefaultBg: va('button-default-bg', colorVar.white),
  buttonDefaultBorderColor: va('button-default-border-color', '#d9d9d9'),
  buttonDefaultColorHover: va('button-default-color-hover', colorVar.primaryColor),
  buttonDefaultBgHover: va('button-default-bg-hover', colorVar.white),
  buttonDefaultBorderColorHover: va('button-default-border-color-hover', colorVar.primaryColor),

  // primary button
  buttonPrimaryColor: va('button-primary-color', colorVar.white),
  buttonPrimaryBg: va('button-primary-bg', colorVar.primaryColor),
  buttonPrimaryBorderColor: va('button-primary-border-color', colorVar.primaryColor),
  buttonPrimaryColorHover: va('button-primary-color-hover', colorVar.white),
  buttonPrimaryBgHover: va('button-primary-bg-hover', '#3288fb'),
  buttonPrimaryBorderColorHover: va('button-primary-border-color-hover', colorVar.primaryColor),
  buttonPrimaryActiveAnimation: animation(
    colorVar.primaryColorFade60,
    colorVar.primaryColorFade0,
    colorVar.primaryColorFade0,
  ),

  // success button
  buttonSuccessColor: va('button-success-color', colorVar.white),
  buttonSuccessBg: va('button-success-bg', colorVar.successColor),
  buttonSuccessBorderColor: va('button-success-border-color', colorVar.successColor),
  buttonSuccessColorHover: va('button-success-color-hover', colorVar.white),
  buttonSuccessBgHover: va('button-success-bg-hover', '#5bdb1d'),
  buttonSuccessBorderColorHover: va('button-success-border-color-hover', colorVar.successColor),
  buttonSuccessActiveAnimation: animation(
    colorVar.successColorFade60,
    colorVar.successColorFade0,
    colorVar.successColorFade0,
  ),

  // danger button
  buttonDangerColor: va('button-danger-color', colorVar.white),
  buttonDangerBg: va('button-danger-bg', colorVar.dangerColor),
  buttonDangerBorderColor: va('button-danger-border-color', colorVar.dangerColor),
  buttonDangerColorHover: va('button-danger-color-hover', colorVar.white),
  buttonDangerBgHover: va('button-danger-bg-hover', '#ff6769'),
  buttonDangerBorderColorHover: va('button-danger-border-color-hover', colorVar.dangerColor),
  buttonDangerActiveAnimation: animation(
    colorVar.dangerColorFade60,
    colorVar.dangerColorFade0,
    colorVar.dangerColorFade0,
  ),

  // warning button
  buttonWarningColor: va('button-warning-color', colorVar.white),
  buttonWarningBg: va('button-warning-bg', colorVar.warningColor),
  buttonWarningBorderColor: va('button-warning-border-color', colorVar.warningColor),
  buttonWarningColorHover: va('button-warning-color-hover', colorVar.white),
  buttonWarningBgHover: va('button-warning-bg-hover', '#ff981a'),
  buttonWarningBorderColorHover: va('button-warning-border-color-hover', colorVar.warningColor),
  buttonWarningActiveAnimation: animation(
    colorVar.warningColorFade60,
    colorVar.warningColorFade0,
    colorVar.warningColorFade0,
  ),

  // secondary button
  buttonSecondaryColor: va('button-secondary-color', colorVar.primaryColor),
  buttonSecondaryBg: va('button-secondary-bg', colorVar.white),
  buttonSecondaryBorderColor: va('button-secondary-border-color', colorVar.primaryColor),
  buttonSecondaryColorHover: va('button-secondary-color-hover', colorVar.white),
  buttonSecondaryBgHover: va('button-secondary-bg-hover', colorVar.primaryColor),
  buttonSecondaryBorderColorHover: va('button-secondary-border-color-hover', colorVar.primaryColor),
};
