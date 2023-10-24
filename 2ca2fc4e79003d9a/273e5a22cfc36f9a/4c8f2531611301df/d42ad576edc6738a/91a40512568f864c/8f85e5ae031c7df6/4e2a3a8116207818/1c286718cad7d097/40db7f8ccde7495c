import { queries } from '@bpd/bpd-web/investment-process/shared/data-access'
import { TEAMS } from '@bpd/bpd-web/shared/config'
import { map } from 'lodash'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FilterOption } from '../components'
import { InvestmentProcessActions } from '../data'

const useGetStaffImsFilter = (
  props: Pick<FilterOption, 'key' | 'label' | 'team'>
): FilterOption => {
  const { key, label, team = TEAMS.EU } = props

  const dispatch = useDispatch()

  const { data } = queries.useGetStaffIms({ url: { team } })

  const preprocessedItems = map(data, ({ name, ntid }) => ({
    label: name,
    value: ntid,
  }))

  // Added extra value as this value is missing in the backend
  const items = [...preprocessedItems, { label: 'Jayaman', value: 'jayaman6' }]

  useEffect(() => {
    if (!data) return
    // Defer until the previous clean up effects are completed
    queueMicrotask(() => dispatch(InvestmentProcessActions.addFilter({ [key]: map(items, 'value') })))
  }, [data])

  return {
    key,
    label,
    items,
    value: map(items, 'value'),
  }
}

export default useGetStaffImsFilter
