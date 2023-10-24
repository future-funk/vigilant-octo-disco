import { useMemo } from 'react'
import { get, size, find } from 'lodash'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { BpdFilterConfig } from '@bpd/bpd-web/shared/ui'
import { EsgPortalSelectors } from '../data'
import {
  FILTER_COLUMN,
  FILTER_STORM_SURGE_VALUES,
  FILTER_REGION_VALUES,
  FILTER_SECTOR_VALUES,
  FILTER_HURRICANE_RISK_VALUES,
  FILTER_FLOOD_RISK_VALUES,
  FILTER_WILDFIRE_RISK_VALUES,
  FILTER_GREEN_CERT_BUCKET_VALUES,
} from '../constants'

interface useGetFilterSelectedValuesProps {
  ignoreDefaults?: boolean
}

const useGetFilterSelectedValues = ({
  ignoreDefaults = true,
}: useGetFilterSelectedValuesProps) => {
  const filterValues = useAppSelector(EsgPortalSelectors.getSelectedFilters)

  const getValues = (
    field: string,
    filterValues: BpdFilterConfig[],
    options: Record<string, string | number>
  ) => {
    const selectedFilterValue = get(find(filterValues, { field }), 'value')
    const filterOptionCount = size(options)
    const selectedValueCount = size(selectedFilterValue)

    return filterOptionCount !== selectedValueCount ? selectedFilterValue : []
  }

  return useMemo(
    () => ({
      propRegion: ignoreDefaults
        ? getValues(
            FILTER_COLUMN.COLUMN_REGION,
            filterValues,
            FILTER_REGION_VALUES
          )
        : get(
            find(filterValues, { field: FILTER_COLUMN.COLUMN_REGION }),
            'value'
          ),
      propType: ignoreDefaults
        ? getValues(
            FILTER_COLUMN.COLUMN_SECTOR,
            filterValues,
            FILTER_SECTOR_VALUES
          )
        : get(
            find(filterValues, { field: FILTER_COLUMN.COLUMN_SECTOR }),
            'value'
          ),
      stormSurgeRr: ignoreDefaults
        ? getValues(
            FILTER_COLUMN.COLUMN_STORM_SURGE_RISK_RATING,
            filterValues,
            FILTER_STORM_SURGE_VALUES
          )
        : get(
            find(filterValues, {
              field: FILTER_COLUMN.COLUMN_STORM_SURGE_RISK_RATING,
            }),
            'value'
          ),
      hurricaneRr: ignoreDefaults
        ? getValues(
            FILTER_COLUMN.COLUMN_HURRICANE_RISK_RATING,
            filterValues,
            FILTER_HURRICANE_RISK_VALUES
          )
        : get(
            find(filterValues, {
              field: FILTER_COLUMN.COLUMN_HURRICANE_RISK_RATING,
            }),
            'value'
          ),
      inlandFloodRr: ignoreDefaults
        ? getValues(
            FILTER_COLUMN.COLUMN_INLAND_FLOOR_RISK_RATING,
            filterValues,
            FILTER_FLOOD_RISK_VALUES
          )
        : get(
            find(filterValues, {
              field: FILTER_COLUMN.COLUMN_INLAND_FLOOR_RISK_RATING,
            }),
            'value'
          ),
      wildfireRr: ignoreDefaults
        ? getValues(
            FILTER_COLUMN.COLUMN_WILDFIRE_RISK_RATING,
            filterValues,
            FILTER_WILDFIRE_RISK_VALUES
          )
        : get(
            find(filterValues, {
              field: FILTER_COLUMN.COLUMN_WILDFIRE_RISK_RATING,
            }),
            'value'
          ),
      bucket: ignoreDefaults
        ? getValues(
            FILTER_COLUMN.COLUMN_BUCKET,
            filterValues,
            FILTER_GREEN_CERT_BUCKET_VALUES
          )
        : get(
            find(filterValues, { field: FILTER_COLUMN.COLUMN_BUCKET }),
            'value'
          ),
    }),
    [filterValues]
  )
}

export default useGetFilterSelectedValues
