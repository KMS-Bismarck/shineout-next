import cssVars from '../cssvar';
// import { colorVar } from '../themes/default';
import { JsStyles } from '../jss-style';

type ButtonClass =
  | 'button'
  | 'default'
  | 'disabled'
  | 'loading'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'
  | '@keyframes parimaryAnimation'
  | '@keyframes successAnimation'
  | '@keyframes dangerAnimation'
  | '@keyframes warningAnimation';

const ButtonStyle: JsStyles<ButtonClass> = {
  button: {
    outline: 'none',
    fontWeight: 400,
    cursor: 'pointer',
    userSelect: 'none',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    backgroundImage: 'none',
    verticalAlign: 'middle',
    border: '1px solid transparent',
    fontSize: cssVars.buttonDefaultFontSize,
    borderRadius: cssVars.buttonBorderRadius,
    lineHeight: cssVars.buttonDefaultLineHeight,
    padding: `${cssVars.buttonDefaultPaddingY} ${cssVars.buttonDefaultPaddingX}`,
    transition: 'all 0.15s ease-in-out',

    '& + &': {
      marginLeft: cssVars.buttonNearlyMargin,
    },

    '&:active': {
      backgroundImage: 'none',
      animationTimingFunction: 'ease-out',
      animationDuration: '0.4s',
      animationDelay: '0s',
      animationIterationCount: '1',
      animationDirection: 'normal',
      animationFillMode: 'none',
      animationPlayState: 'running',
    },
  },

  default: {
    color: cssVars.buttonDefaultColor,
    backgroundColor: cssVars.buttonDefaultBg,
    borderColor: cssVars.buttonDefaultBorderColor,
    '&:hover': {
      color: cssVars.buttonDefaultColorHover,
      backgroundColor: cssVars.buttonDefaultBgHover,
      borderColor: cssVars.buttonDefaultBorderColorHover,
    },
  },
  primary: {
    color: cssVars.buttonPrimaryColor,
    backgroundColor: cssVars.buttonPrimaryBg,
    borderColor: cssVars.buttonPrimaryBorderColor,

    '&:hover': {
      color: cssVars.buttonPrimaryColorHover,
      backgroundColor: cssVars.buttonPrimaryBgHover,
      borderColor: cssVars.buttonPrimaryBorderColorHover,
    },

    '&:active': {
      animationName: '$parimaryAnimation',
    },
  },
  secondary: {
    color: cssVars.buttonSecondaryColor,
    backgroundColor: cssVars.buttonSecondaryBg,
    borderColor: cssVars.buttonSecondaryBorderColor,
    '&:hover': {
      color: cssVars.buttonSecondaryColorHover,
      backgroundColor: cssVars.buttonSecondaryBgHover,
      borderColor: cssVars.buttonSecondaryBorderColorHover,
    },
    '&:active': {
      animationName: '$parimaryAnimation',
    },
  },
  danger: {
    color: cssVars.buttonDangerColor,
    backgroundColor: cssVars.buttonDangerBg,
    borderColor: cssVars.buttonDangerBorderColor,
    '&:hover': {
      color: cssVars.buttonDangerColorHover,
      backgroundColor: cssVars.buttonDangerBgHover,
      borderColor: cssVars.buttonDangerBorderColorHover,
    },
    '&:active': {
      animationName: '$dangerAnimation',
    },
  },
  warning: {
    color: cssVars.buttonWarningColor,
    backgroundColor: cssVars.buttonWarningBg,
    borderColor: cssVars.buttonWarningBorderColor,
    '&:hover': {
      color: cssVars.buttonWarningColorHover,
      backgroundColor: cssVars.buttonWarningBgHover,
      borderColor: cssVars.buttonWarningBorderColorHover,
    },
    '&:active': {
      animationName: '$warningAnimation',
    },
  },
  success: {
    color: cssVars.buttonSuccessColor,
    backgroundColor: cssVars.buttonSuccessBg,
    borderColor: cssVars.buttonSuccessBorderColor,
    '&:hover': {
      color: cssVars.buttonSuccessColorHover,
      backgroundColor: cssVars.buttonSuccessBgHover,
      borderColor: cssVars.buttonSuccessBorderColorHover,
    },
    '&:active': {
      animationName: '$successAnimation',
    },
  },
  info: {},
  light: {},
  dark: {},
  link: {},
  disabled: {},
  loading: {},

  // animation
  '@keyframes parimaryAnimation': cssVars.buttonPrimaryActiveAnimation,
  '@keyframes successAnimation': cssVars.buttonSuccessActiveAnimation,
  '@keyframes dangerAnimation': cssVars.buttonDangerActiveAnimation,
  '@keyframes warningAnimation': cssVars.buttonWarningActiveAnimation,
};

export default ButtonStyle;
