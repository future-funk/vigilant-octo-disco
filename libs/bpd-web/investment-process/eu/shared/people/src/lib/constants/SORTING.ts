import { SortConfig } from '@bpd/bpd-web/shared/ui'

export const DEFAULT_SORT: SortConfig = {
  label: 'Initials - A to Z',
  field: 'initials',
  order: 'asc',
}

export const STAFF_SORTING: SortConfig[] = [
  DEFAULT_SORT,
  { label: 'Initials - Z to A', field: 'initials', order: 'desc' },
  {
    label: '# of Deal - Low to High',
    field: 'totalCount',
    order: 'asc',
  },
  {
    label: '# of Deal - High to Low',
    field: 'totalCount',
    order: 'desc',
  },
]
