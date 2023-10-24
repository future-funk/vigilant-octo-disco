import { round, toNumber } from 'lodash'

export type FormatMetreTo = 'km'

const formatMetres = (value?: number | string, to: FormatMetreTo = 'km') => {
  switch (to) {
    case 'km':
      return `${round(toNumber(value) / 1000, 2)} KM`
    default:
      return value?.toString() ?? ''
  }
}

export default formatMetres
