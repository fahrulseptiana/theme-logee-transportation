import {makeTheme} from '@theme-ui/css/utils'

import { button } from '.'

import * as token from './legion-tokens/output/js/logee-transportation'

export const logeeTheme = makeTheme({
  buttons: {
    solid: {
      ...button,
      backgroundColor: token.buttonsSolidBackgroundColor,
      fontFamily: token.buttonsSolidFontFamily,
      color: token.buttonsSolidColor,
      '&:hover': {
        backgroundColor: token.buttonsSolidHoverBackgroundColor
      },
      '&:active': {
        backgroundColor: `${token.buttonsSolidActiveBackgroundColor} !important`
      },
      '&:focus': {
        backgroundColor: `${token.buttonsSolidFocusBackgroundColor} !important`
      },
      '&:disabled': {
        backgroundColor: `${token.buttonsSolidDisabledBackgroundColor} !important`,
        backgroundColor: `${token.buttonsSolidDisabledColor} !important`,
      }
    },
    soft: {
      ...button,
      backgroundColor: token.buttonsSoftBackgroundColor,
      fontFamily: token.buttonsSoftFontFamily,
      color: token.buttonsSoftColor,
      '&:hover': {
        backroundColor: token.buttonsSoftHoverBackgroundColor
      },
      '&:active': {
        backgroundColor: `${token.buttonsSoftActiveBackgroundColor} !important`
      },
      '&:focus': {
        backgroundColor: `${token.buttonsSoftFocusBackgroundColor} !important`
      },
      '&:disabled': {
        backgroundColor: `${token.buttonsSoftDisabledBackgroundColor} !important`
      }
    },
  }
})

export default logeeTheme
