import {theme} from '@legion-ui/theme-base'
import {makeTheme} from '@theme-ui/css/utils'

import { merge, button } from '.'
import { Theme } from '@theme-ui/css/dist/declarations/src/types'

import {buttonsSolidBackgroundColor, buttonsSoftBackgroundColor, buttonsSolidFontFamily, buttonsSoftFontFamily} from './legion-tokens/output/js/logee-transportation'

const obj: Theme = {...merge(theme, {
  buttons: {
    solid: {
      ...button,
      backgroundColor: buttonsSolidBackgroundColor,
      fontFamily: buttonsSolidFontFamily
    },
    soft: {
      ...button,
      backgroundColor: buttonsSoftBackgroundColor,
      fontFamily: buttonsSoftFontFamily
    },
  }
})}

export const logeeTheme = makeTheme(obj)

export default logeeTheme