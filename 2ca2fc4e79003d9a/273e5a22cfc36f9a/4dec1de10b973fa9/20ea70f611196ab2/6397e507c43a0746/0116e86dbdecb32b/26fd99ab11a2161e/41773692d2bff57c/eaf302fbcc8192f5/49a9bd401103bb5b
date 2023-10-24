import { find, size, difference } from 'lodash'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import {
  MARKET,
  HOLDING,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { DirectorySelectors } from '../data/stores/directorySlice'
import { typeFilter, filterOptions } from '../configs'
import dayjs from 'dayjs'

const revertTypeResults = (selectedValues: string[] = []) => {
  const filterValues = typeFilter.options.map(
    (type: filterOptions) => type.value
  )
  const revertTypes = difference(filterValues, selectedValues)
  return revertTypes.length > 0 ? revertTypes : filterValues
}

const useGetSelectedFilterValues = () => {
  const filters = useAppSelector(DirectorySelectors.getSelectedDirectoryFilters)
  const { value: bpInvStatus } = find(filters, { field: 'bp_inv_status' }) || {}
  const { value: propType } = find(filters, { field: 'prop_type_in' }) || {}
  const { value: minValuation } = find(filters, { field: 'minValuation' }) || {}
  const { value: maxValuation } = find(filters, { field: 'maxValuation' }) || {}
  const { value: minCapRate } = find(filters, { field: 'minCapRate' }) || {}
  const { value: maxCapRate } = find(filters, { field: 'maxCapRate' }) || {}
  const { value: acqVintageDate } =
    find(filters, { field: 'acq_vintage_dt' }) || {}

  return {
    filters,
    revertedSelectedType: revertTypeResults(bpInvStatus),
    selectedFilterValues: {
      bpInvStatus:
        (bpInvStatus || []).length === 0 ? [MARKET, HOLDING] : bpInvStatus,
      propType,
      minValuation,
      maxValuation,
      minCapRate,
      maxCapRate,
      minAcqVintageDate:
        size(acqVintageDate) > 0 &&
        dayjs(acqVintageDate[0]).format('MM/DD/YYYY'),
      maxAcqVintageDate:
        size(acqVintageDate) > 0 &&
        dayjs(acqVintageDate[1]).format('MM/DD/YYYY'),
    },
  }
}

export default useGetSelectedFilterValues
