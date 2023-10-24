import { values } from 'lodash'
import { BpdFilterControlType } from '@bpd/bpd-web/shared/ui'
// import { Filters as CoreFilters } from './Filters'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { CURRENCY } from '../constants'
import { MvIrrActions, MvIrrSelectors } from '../data'
import { useGetBaseFilterItems } from '../hooks'
import Filters from './Filters'

const FilterBar = () => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector(MvIrrSelectors.getFilters)
  const handleChange = (key: string, value: unknown) => {
    dispatch(MvIrrActions.setFilters({ ...filters, [key]: value }))
  }

  const { fiscalYearItems } = useGetBaseFilterItems()

  return (
    <Filters
      filters={filters}
      handleChange={handleChange}
      options={[
        {
          key: 'fiscalYear',
          label: 'Fiscal Year',
          style: { minWidth: 120 },
          type: BpdFilterControlType.SingleSelect,
          componentProps: { items: fiscalYearItems },
        },
        {
          key: 'currency',
          label: 'Currency',
          type: BpdFilterControlType.SingleSelect,
          style: { minWidth: 120 },
          componentProps: { items: values(CURRENCY) },
        },
      ]}
    />
  )
}

export default FilterBar
