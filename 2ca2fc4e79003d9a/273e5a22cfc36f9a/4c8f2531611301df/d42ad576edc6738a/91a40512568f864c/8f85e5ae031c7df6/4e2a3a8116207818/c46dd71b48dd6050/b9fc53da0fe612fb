import { formatPercent } from '@bpd/utils/formatters'
import { isNil } from 'lodash'

const getPercent = (value?: number) => {
  if (isNil(value)) return ''
  const localeValue = (value * 100).toLocaleString('en', {
    maximumFractionDigits: 2,
  })
  return `${localeValue}%`
}

export default getPercent
