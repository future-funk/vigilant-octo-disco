import { SortConfig } from '@bpd/bpd-web/shared/ui'

const sortingOptions: SortConfig[] = [
  {
    field: 'propValuationUsd',
    order: 'desc',
    label: 'Asking Price/Valuation High to Low',
    value: '[desc] propValuationUsd',
  },
  {
    field: 'propValuationUsd',
    order: 'asc',
    label: 'Asking Price/Valuation Low to High',
    value: '[asc] propValuationUsd',
  },
  {
    field: 'distance',
    order: 'desc',
    label: 'Distance Far to Near',
    value: '[desc] distance',
  },
  {
    field: 'distance',
    order: 'asc',
    label: 'Distance Near to Far',
    value: '[asc] distance',
  },
  {
    field: 'acqVintageDt',
    order: 'desc',
    label: 'Deal Added Date/Acq Date - New to Old',
    value: '[desc] acqVintageDt',
  },
  {
    field: 'acqVintageDt',
    order: 'asc',
    label: 'Deal Added Date/Acq Date - Old to New',
    value: '[asc] acqVintageDt',
  },
  {
    field: 'dealLeadNow',
    order: 'desc',
    label: 'Deal Lead - A to Z',
    value: '[desc] dealLeadNow',
  },
  {
    field: 'dealLeadNow',
    order: 'asc',
    label: 'Deal Lead - Z to A',
    value: '[asc] dealLeadNow',
  },
]

export default sortingOptions
