import { BpdFilterComponent } from '@bpd/bpd-web/shared/ui'

export interface filterOptions extends Pick<BpdFilterComponent, 'options'> {
  value: string
  label: string
}

export const developmentStageFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Development Stage',
  field: 'developmentStage',
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: [
    { label: 'Completed', value: 'Completed', key: 'Completed' },
    { label: 'Construction', value: 'Construction', key: 'Construction' },
    { label: 'Land', value: 'Land', key: 'Land' },
  ],
}

export const dealStatusFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Deal Status',
  field: 'dealStatus',
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: [
    { label: 'Approved', value: 'Approved', key: 'Approved' },
    { label: 'Closed', value: 'Closed', key: 'Closed' },
    { label: 'Dropped', value: 'Dropped', key: 'Dropped' },
  ],
}

export const warehouseTypeFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Warehouse Type',
  disableIcon: true,
  field: 'assetType',
  type: 'EQ',
  component: 'DROPDOWN',
  options: [
    { label: 'All', value: 'all', type: 'EQ' },
    { label: 'Dry Storage', value: 'dry storage', type: 'EQ' },
    { label: 'Cold Storage', value: 'cold storage', type: 'EQ' },
  ],
  visibility: { display: { sm: 'none', lg: 'block' } },
}

export const teamFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Team',
  field: 'team',
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: [
    { label: 'Greater China', value: 'Greater China', key: 'Greater China' },
    { label: 'ASIG', value: 'ASIG', key: 'ASIG' },
  ],
  visibility: { display: { sm: 'none', xl: 'block' } },
}

export const partnerFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Partner',
  field: 'partner',
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: [],
  visibility: { display: { sm: 'none', xxl: 'block' } },
}

export const dealsFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Deal Name',
  field: 'dealName',
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  dropdownMatchSelectWidth: false,
  options: [],
  visibility: { display: { sm: 'none', xxl: 'block' } },
}

export const cityFilter: BpdFilterComponent = {
  asModal: false,
  label: 'City',
  field: 'city',
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: [ ],
  visibility: { display: { sm: 'none', xxl: 'block' } },
}

export const cityTierFilter: BpdFilterComponent = {
  asModal: false,
  label: 'City Tier',
  field: 'cityTier',
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: [],
}

export const gfaRangeFilter: BpdFilterComponent = {
  asModal: true,
  label: 'GFA (sqm)',
  disableIcon: true,
  field: 'gfaSqm',
  type: 'RANGE',
  component: 'RANGE',
  options: {
    min: 0,
    max: 400000
  }
}

export const directoryFilterMore: BpdFilterComponent = {
  asModal: true,
  label: 'More Filters',
  field: 'more',
  children: [
    { ...warehouseTypeFilter, visibility: { display: { lg: 'none', md: 'flex' } } },
    { ...teamFilter, visibility: { display: { xl: 'none', md: 'flex' } } },
  ],
}
