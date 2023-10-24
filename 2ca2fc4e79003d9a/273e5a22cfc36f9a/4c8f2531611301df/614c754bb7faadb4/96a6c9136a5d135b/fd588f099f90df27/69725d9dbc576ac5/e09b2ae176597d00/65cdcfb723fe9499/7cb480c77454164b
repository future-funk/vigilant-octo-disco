import { VINTAGE_OPTIONS } from '../constants'
import moment from 'moment'

const INCEPTION_DATE = '1800-01-01'

const getCurrentFinancialYear = () => {
  const today = new Date()
  if (today.getMonth() + 1 <= 3) {
    return today.getFullYear() - 1
  } else {
    return today.getFullYear()
  }
}

const getVintageRange = (option: keyof typeof VINTAGE_OPTIONS) => {
  const today = moment().format('YYYY-MM-DD')

  switch (option) {
    case VINTAGE_OPTIONS.SINCE_INCEPTION:
      return [INCEPTION_DATE, today]
    case VINTAGE_OPTIONS.LAST_6_MONTHS:
      return [moment().subtract(180, 'day').format('YYYY-MM-DD'), today]
    case VINTAGE_OPTIONS.LAST_1_YEAR:
      return [moment().subtract(365, 'day').format('YYYY-MM-DD'), today]
    case VINTAGE_OPTIONS.LAST_2_YEARS:
      return [moment().subtract(730, 'day').format('YYYY-MM-DD'), today]
    case VINTAGE_OPTIONS.FTYD:
      return [`${getCurrentFinancialYear()}-04-01`, today]
    default:
      throw Error('invalid vintage option')
  }
}

export default getVintageRange
