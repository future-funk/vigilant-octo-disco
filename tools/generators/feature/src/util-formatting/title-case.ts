import { replace, startCase, toLower } from 'lodash'

export const titleCase = (value: string) =>
  replace(startCase(toLower(value)), /\s/g, '')
