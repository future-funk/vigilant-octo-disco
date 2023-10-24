import { GetTxnByDimensionResult } from '@bpd/market-transactions/shared/data-access'
import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import { chain } from 'lodash'
import { FREQUENCY_TYPE } from '../constants'

dayjs.extend(quarterOfYear)

const getUniqueLabelsByFrequency = (
  data: GetTxnByDimensionResult,
  frequency: string
): string[] => {
  switch (frequency) {
    case FREQUENCY_TYPE.MONTHLY:
      return chain(data)
        .map((d) => dayjs(d.dt).format('YYYY MMM'))
        .uniq()
        .value()

    case FREQUENCY_TYPE.QUARTERLY:
      return chain(data)
        .map((d) => `${dayjs(d.dt).year()} Q${dayjs(d.dt).quarter()}`)
        .uniq()
        .value()

    case FREQUENCY_TYPE.ANNUALLY:
    default:
      return chain(data)
        .map((d) => dayjs(d.dt).format('YYYY'))
        .uniq()
        .value()
  }
}

export default getUniqueLabelsByFrequency
