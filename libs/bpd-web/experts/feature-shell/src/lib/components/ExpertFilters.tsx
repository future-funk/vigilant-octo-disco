import { values, get } from 'lodash'
import { Stack } from '@gic/battlefield-ui-pack'
import {
  VIEW_TYPE,
  PERIOD_TYPE,
  DEAL_TYPE,
  TOP_N_TYPE,
} from '@bpd/bpd-web/experts/shared/data-access'
import { useAppDispatch, useAppSelector } from '@bpd/bpd-web/shared/store'
import { CORP_TITLE } from '@bpd/bpd-web/shared/core'
import { ExpertSelectors, ExpertActions } from '../data'
import { FilterType, FilterItem, FilterComponent } from '../components/filters'

const filterConfig: FilterItem[] = [
  {
    key: 'viewBy',
    label: 'View By',
    type: FilterType.SingleSelect,
    componentProps: { items: values(VIEW_TYPE) },
  },
  {
    key: 'period',
    label: 'Period',
    type: FilterType.SingleSelect,
    componentProps: { items: values(PERIOD_TYPE) },
  },
  {
    key: 'dealStatus',
    label: 'Deal Status',
    type: FilterType.MultiSelect,
    componentProps: { items: values(DEAL_TYPE) },
  },
  {
    key: 'corporateTitle',
    label: 'Corporate Title',
    type: FilterType.MultiSelect,
    componentProps: { items: values(CORP_TITLE) },
  },
  {
    key: 'topN',
    label: 'Top N',
    type: FilterType.SingleSelect,
    componentProps: { items: values(TOP_N_TYPE) },
  },
]

const ExpertFilters = () => {
  const dispatch = useAppDispatch()

  const baseFilterValues = useAppSelector(ExpertSelectors.getBaseFilters)

  const handleChange = (key: string, value: unknown) => {
    dispatch(
      ExpertActions.setBaseFilters({ ...baseFilterValues, [key]: value })
    )
  }

  return (
    <Stack
      alignItems="center"
      direction="row"
      spacing={1}
      pb={1}
      sx={{ overflowX: { sm: 'scroll', xl: 'hidden' }, overflowY: 'hidden' }}
    >
      {filterConfig.map(({ key, ...rest }, index: number) => (
        <Stack key={`${key}-${index}`} sx={{ flexGrow: 2 }}>
          <FilterComponent
            {...{
              ...rest,
              key,
              filterKey: key,
              handleChange,
              value: get(baseFilterValues, key),
            }}
          />
        </Stack>
      ))}
    </Stack>
  )
}

export default ExpertFilters
