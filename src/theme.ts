import {theme} from '@legion-ui/theme-base'
import {makeTheme} from '@theme-ui/css/utils'

import { merge, button } from '.'
import { Theme } from '@theme-ui/css/dist/declarations/src/types'

import {buttonsSolidBackgroundColor, buttonsSoftBackgroundColor, buttonsSolidFontFamily, buttonsSoftFontFamily, buttonsSolidHoverBackgroundColor, buttonsSolidActiveBackgroundColor, buttonsSolidFocusBackgroundColor, buttonsSolidDisabledBackgroundColor, buttonsSoftHoverBackgroundColor, buttonsSoftActiveBackgroundColor, buttonsSoftFocusBackgroundColor, buttonsSoftDisabledBackgroundColor} from './legion-tokens/output/js/logee-transportation'

const obj: Theme = {...merge(theme, {
  buttons: {
    solid: {
      ...button,
      backgroundColor: buttonsSolidBackgroundColor,
      fontFamily: buttonsSolidFontFamily,
      '&:hover': {
        backroundColor: buttonsSolidHoverBackgroundColor
      },
      '&:active': {
        backgroundColor: `${buttonsSolidActiveBackgroundColor} !important`
      },
      '&:focus': {
        backgroundColor: `${buttonsSolidFocusBackgroundColor} !important`
      },
      '&:disabled': {
        backgroundColor: `${buttonsSolidDisabledBackgroundColor} !important`
      }
    },
    soft: {
      ...button,
      backgroundColor: buttonsSoftBackgroundColor,
      fontFamily: buttonsSoftFontFamily,
      '&:hover': {
        backroundColor: buttonsSoftHoverBackgroundColor
      },
      '&:active': {
        backgroundColor: `${buttonsSoftActiveBackgroundColor} !important`
      },
      '&:focus': {
        backgroundColor: `${buttonsSoftFocusBackgroundColor} !important`
      },
      '&:disabled': {
        backgroundColor: `${buttonsSoftDisabledBackgroundColor} !important`
      }
    },
  }
})}

export const logeeTheme = makeTheme(obj)

export default logeeTheme