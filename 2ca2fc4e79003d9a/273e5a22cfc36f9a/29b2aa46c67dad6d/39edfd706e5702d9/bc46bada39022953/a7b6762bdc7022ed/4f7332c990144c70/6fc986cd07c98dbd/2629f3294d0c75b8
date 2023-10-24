import dayjs from 'dayjs'
import { range, map } from 'lodash'

const MSA_DATA_CUT_OFF_YEAR = 2016

const useGetFyFilterOptions = (): {
  items: { label: string; value: number }[]
} => {
  const yearsArr = range(MSA_DATA_CUT_OFF_YEAR, dayjs().year() + 1).reverse()

  const items = map(yearsArr, (fy) => ({
    label: `${fy === MSA_DATA_CUT_OFF_YEAR ? '<=' : ''}FY${fy}`,
    value: fy,
  }))
  return {
    items,
  }
}
export default useGetFyFilterOptions
