import { some, filter, isNil, size, sumBy } from 'lodash'
import { BreakDown } from './types'
const validateBreakdowns = (breakdowns: BreakDown[] | undefined | null) => {
  if (!breakdowns) return true

  const activeBreakdowns = filter(
    breakdowns,
    (breakdown) => !breakdown?.isDeleted
  )

  if (
    size(activeBreakdowns) === 0 ||
    some(activeBreakdowns, (item) => isNil(item.itemAumPct)) //error will be captured in required field. so no need here.
  )
    return true

  const sum = sumBy(activeBreakdowns, 'itemAumPct')

  return sum === 1
}

export default validateBreakdowns
