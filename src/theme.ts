import {theme} from '@legion-ui/theme-base'
import {makeTheme} from '@theme-ui/css/utils'

import { merge, button } from '.'
import { Theme } from '@theme-ui/css/dist/declarations/src/types'

import {buttonsSolidBackgroundColor} from './legion-tokens/output/js/logee-transportation'

const obj: Theme = {...merge(theme, {
  buttons: {
    solid: {
      ...button,
      backgroundColor: buttonsSolidBackgroundColor,
    }
  }
})}

export const logeeTheme = makeTheme(obj)

export default logeeTheme