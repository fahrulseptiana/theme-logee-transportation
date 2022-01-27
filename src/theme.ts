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
        backgroundColor: `${token.buttonsSolidHoverBackgroundColor} !important`
      },
      '&:active': {
        backgroundColor: `${token.buttonsSolidActiveBackgroundColor} !important`
      },
      '&:focus': {
        backgroundColor: `${token.buttonsSolidFocusBackgroundColor}`
      },
      '&:disabled': {
        backgroundColor: `${token.buttonsSolidDisabledBackgroundColor} !important`,
        color: `${token.buttonsSolidDisabledColor} !important`,
      }
    },
    soft: {
      ...button,
      backgroundColor: token.buttonsSoftBackgroundColor,
      fontFamily: token.buttonsSoftFontFamily,
      color: token.buttonsSoftColor,
      '&:hover': {
        backgroundColor: `${token.buttonsSoftHoverBackgroundColor} !important`
      },
      '&:active': {
        backgroundColor: `${token.buttonsSoftActiveBackgroundColor} !important`
      },
      '&:focus': {
        backgroundColor: `${token.buttonsSoftFocusBackgroundColor}`
      },
      '&:disabled': {
        backgroundColor: `${token.buttonsSoftDisabledBackgroundColor} !important`
      }
    },
  }
})

export default logeeTheme
