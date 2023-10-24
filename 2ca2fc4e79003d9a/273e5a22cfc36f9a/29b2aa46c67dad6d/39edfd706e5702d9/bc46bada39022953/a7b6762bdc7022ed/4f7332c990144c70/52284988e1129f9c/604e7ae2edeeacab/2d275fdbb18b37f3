import React, { ReactNode } from 'react'
import { get } from 'lodash'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { Stack } from '@gic/battlefield-ui-pack'

import { MsaExposureActions, MsaExposureSelectors } from '../../data'
import { BpdFilterControl, BpdFilterControlItem } from '@bpd/bpd-web/shared/ui'

export type FilterItems = BpdFilterControlItem[]

export interface FiltersProps {
  options?: FilterItems
}

export type FilterState = Record<string, string[]>

const Filters: React.FC<FiltersProps> = (props) => {
  const { options = [] } = props

  const dispatch = useAppDispatch()

  const filters = useAppSelector(MsaExposureSelectors.getFilters)

  const handleChange = (key: string, value: unknown) => {
    dispatch(MsaExposureActions.setFilters({ ...filters, [key]: value }))
  }

  return (
    <Stack alignItems="center" direction="row" spacing={1}>
      {options.map(({ key, ...rest }) => (
        <BpdFilterControl
          {...{
            ...rest,
            key,
            filterKey: key,
            handleChange,
            value: get(filters, key),
          }}
        />
      ))}
    </Stack>
  )
}

export default Filters
