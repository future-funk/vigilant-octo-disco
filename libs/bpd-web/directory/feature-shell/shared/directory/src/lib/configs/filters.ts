import { BpdFilterComponent } from '@bpd/bpd-web/shared/ui'
import { SECTOR } from '@bpd/bpd-web/shared/data-access'

export interface filterOptions extends Pick<BpdFilterComponent, 'options'> {
  value: string
  label: string
}

export const typeFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Type',
  field: 'bp_inv_status',
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: [
    { label: 'GIC Owned', value: 'Holding', key: 'Holding' },
    { label: 'Market', value: 'Market', key: 'Market' },
  ],
  visibility: { display: { sm: 'none', lg: 'flex' } },
}

export const sectorFilter: BpdFilterComponent = {
  label: 'Sector',
  field: 'prop_type_in',
  type: 'NEQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: [
    {
      label: SECTOR.DATA_CENTER.name,
      value: SECTOR.DATA_CENTER.name,
      key: SECTOR.DATA_CENTER.name,
    },
    {
      label: SECTOR.HOSPITALITY.name,
      value: SECTOR.HOSPITALITY.name,
      key: SECTOR.HOSPITALITY.name,
    },
    {
      label: SECTOR.MIXED_USE.name,
      value: SECTOR.MIXED_USE.name,
      key: SECTOR.MIXED_USE.name,
    },
    {
      label: SECTOR.RESIDENTIAL.name,
      value: SECTOR.RESIDENTIAL.name,
      key: SECTOR.RESIDENTIAL.name,
    },
    {
      label: SECTOR.STORAGE.name,
      value: SECTOR.STORAGE.name,
      key: SECTOR.STORAGE.name,
    },
    {
      label: SECTOR.LIFE_SCIENCE.name,
      value: SECTOR.LIFE_SCIENCE.name,
      key: SECTOR.LIFE_SCIENCE.name,
    },
    {
      label: SECTOR.DIVERSIFIED.name,
      value: SECTOR.DIVERSIFIED.name,
      key: SECTOR.DIVERSIFIED.name,
    },
    {
      label: SECTOR.INDUSTRIAL.name,
      value: SECTOR.INDUSTRIAL.name,
      key: SECTOR.INDUSTRIAL.name,
    },
    {
      label: SECTOR.OFFICE.name,
      value: SECTOR.OFFICE.name,
      key: SECTOR.OFFICE.name,
    },
    {
      label: SECTOR.RETAIL.name,
      value: SECTOR.RETAIL.name,
      key: SECTOR.RETAIL.name,
    },
    {
      label: SECTOR.STUDENT_HOUSING.name,
      value: SECTOR.STUDENT_HOUSING.name,
      key: SECTOR.STUDENT_HOUSING.name,
    },
    {
      label: SECTOR.EDUCATION.name,
      value: SECTOR.EDUCATION.name,
      key: SECTOR.EDUCATION.name,
    },
    {
      label: SECTOR.HEALTHCARE.name,
      value: SECTOR.HEALTHCARE.name,
      key: SECTOR.HEALTHCARE.name,
    },
    {
      label: SECTOR.MANUFACTURED_HOUSING.name,
      value: SECTOR.MANUFACTURED_HOUSING.name,
      key: SECTOR.MANUFACTURED_HOUSING.name,
    },
    {
      label: SECTOR.RENTAL_APARTMENT.name,
      value: SECTOR.RENTAL_APARTMENT.name,
      key: SECTOR.RENTAL_APARTMENT.name,
    },
    {
      label: SECTOR.SENIOR_HOUSING.name,
      value: SECTOR.SENIOR_HOUSING.name,
      key: SECTOR.SENIOR_HOUSING.name,
    },
    {
      label: SECTOR.UNALLOCATED_ACC.name,
      value: SECTOR.UNALLOCATED_ACC.name,
      key: SECTOR.UNALLOCATED_ACC.name,
    },
    {
      label: SECTOR.OTHERS.name,
      value: SECTOR.OTHERS.name,
      key: SECTOR.OTHERS.name,
    },
  ],
  visibility: { display: { sm: 'none', xl: 'flex' } },
}

export const valuationFilter: BpdFilterComponent = {
  label: 'Valuation',
  field: 'bp_valuation',
  type: 'RANGE',
  component: 'INPUT_RANGE',
  placeholder: 'Select',
  prefix: '$',
  separator: 'To',
  inputs: [
    {
      name: 'minValuation',
      type: 'GTE',
      input: 'number',
      label: 'Min Valuation (in $M)',
    },
    {
      name: 'maxValuation',
      type: 'LTE',
      input: 'number',
      label: 'Max Valuation (in $M)',
    },
  ],
  visibility: { display: { sm: 'none', xl: 'flex' } },
}

export const capRateFilter: BpdFilterComponent = {
  label: 'Cap Rate',
  field: 'bp_cap_rate',
  type: 'RANGE',
  component: 'INPUT_RANGE',
  placeholder: 'Select',
  prefix: '%',
  separator: 'To',
  inputs: [
    { name: 'minCapRate', type: 'GTE', input: 'number', label: 'Min Cap Rate' },
    { name: 'maxCapRate', type: 'LTE', input: 'number', label: 'Max Cap Rate' },
  ],
  visibility: { display: { sm: 'none', xxl: 'flex' } },
}

export const acqVintageDateFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Acq Date/Vintage',
  field: 'acq_vintage_dt',
  type: 'RANGE',
  component: 'DATE_RANGE',
  //@ts-ignore
  placeholder: ['Min Acq Date/Vintage', 'Max Acq Date/Vintage'],
  visibility: { display: { sm: 'none', xxl: 'block' } },
}

export const directoryFilterMore: BpdFilterComponent = {
  asModal: true,
  label: 'More Filters',
  field: 'more',
  children: [
    { ...typeFilter, visibility: { display: { lg: 'none', sm: 'flex' } } },
    { ...sectorFilter, visibility: { display: { sm: 'flex', xl: 'none' } } },
    { ...valuationFilter, visibility: { display: { sm: 'flex', xl: 'none' } } },
    { ...capRateFilter, visibility: { display: { sm: 'flex', xxl: 'none' } } },
    {
      ...acqVintageDateFilter,
      visibility: { display: { sm: 'flex', xxl: 'none' } },
    },
  ],
  visibility: { display: { sm: 'flex', xxl: 'none' }, marginTop: '24px' },
}

const directoryFilters = [
  typeFilter,
  sectorFilter,
  valuationFilter,
  capRateFilter,
  acqVintageDateFilter,
  directoryFilterMore,
]

export default directoryFilters
