import { DEAL_SECTORS, SECTORS } from '@bpd/ui/constants'
import { chain } from 'lodash'

export const DEAL_SECTORS_TITLE_MAP = chain(DEAL_SECTORS)
  .toPairs()
  .orderBy([1], ['asc'])
  .filter(([key]) => key !== 'OTHERS')
  .concat([['OTHERS', DEAL_SECTORS.OTHERS]])
  .map(([key, value]) => ({
    label: value === SECTORS.RESIDENTIAL ? SECTORS.RESIDENTIAL_FOR_SALE : value,
    value,
  }))
  .value()
