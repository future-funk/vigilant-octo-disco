import { useEffect } from 'react'
import { map, initial } from 'lodash'
import { inputFormats } from '@bpd/bpd-web/shared/ui'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import Filters from './Filters'
import { FilterType } from './FilterComponent'
import { MsaExposureActions, MsaExposureSelectors } from '../../data'
import { useGetFyFilterOptions, useGetSectorFilter } from '../../hooks'

const FilterBar = () => {
  const dispatch = useAppDispatch()

  const { items } = useGetFyFilterOptions()

  const isStateRegistered = useAppSelector(
    MsaExposureSelectors.getIsStateRegistered
  )

  useEffect(() => {
    if (isStateRegistered) {
      dispatch(
        MsaExposureActions.addFilter({ years: map(initial(items), 'value') })
      )
    }
  }, [isStateRegistered])

  return (
    <Filters
      options={[
        {
          key: 'years',
          label: 'FY Vintage',
          type: FilterType.MultiSelect,
          componentProps: {
            items,
          },
        },
        {
          key: 'minProjectNmv',
          label: 'Min Project NVM',
          type: FilterType.NumberInput,
          componentProps: {
            addonAfter: '$M',
            step: 1000000,
            ...inputFormats.NUM_2_MILLION,
          },
        },
        {
          key: 'minAssetNmv',
          label: 'Min Asset NVM',
          type: FilterType.NumberInput,
          componentProps: {
            addonAfter: '$M',
            step: 1000000,
            ...inputFormats.NUM_2_MILLION,
          },
        },
        {
          ...useGetSectorFilter({ key: 'sectors', label: 'Sector' }),
          type: FilterType.MultiSelect,
        },
        {
          key: 'top',
          label: 'Show TOP N',
          type: FilterType.NumberInput,
        },
      ]}
    />
  )
}

export default FilterBar
