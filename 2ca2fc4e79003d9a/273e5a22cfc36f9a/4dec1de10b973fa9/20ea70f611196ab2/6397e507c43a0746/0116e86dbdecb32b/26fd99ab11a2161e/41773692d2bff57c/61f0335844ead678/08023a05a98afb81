import { typeFilter, filterOptions } from './filters'
import { CN_LOGISTICS } from '../constants'

export type TypeOf = 'number' | 'string' | 'date'
export interface searchPresetProps {
  filter: string
  field: string
  column: string
  typeOf: TypeOf
  operator: string
  applicableTypes: string[]
}

export const sqlOperator = {
  EQ: '=',
  GTE: '>=',
  LTE: '<=',
  IN: 'IN',
  ENVELOPE: 'ENVELOPE',
  RANGE: 'RANGE',
}

export const searchPreset: searchPresetProps[] = [
  {
    filter: 'bpInvStatus',
    field: 'bpInvStatus',
    column: 'bp_inv_status',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes:
      typeFilter?.options?.map((option: filterOptions) => option?.value) || [],
  },
  {
    filter: 'propType',
    field: 'propType',
    column: 'prop_type',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes:
      typeFilter?.options?.map((option: filterOptions) => option?.value) || [],
  },
  {
    filter: 'minValuation',
    field: 'bpValuation',
    column: 'bp_valuation',
    typeOf: 'number',
    operator: sqlOperator.GTE,
    applicableTypes:
      typeFilter?.options?.map((option: filterOptions) => option?.value) || [],
  },
  {
    filter: 'maxValuation',
    field: 'bpValuation',
    column: 'bp_valuation',
    typeOf: 'number',
    operator: sqlOperator.LTE,
    applicableTypes:
      typeFilter?.options?.map((option: filterOptions) => option?.value) || [],
  },
  {
    filter: 'minCapRate',
    field: 'bpCapRate',
    column: 'bp_cap_rate',
    typeOf: 'number',
    operator: sqlOperator.GTE,
    applicableTypes:
      typeFilter?.options?.map((option: filterOptions) => option?.value) || [],
  },
  {
    filter: 'maxCapRate',
    field: 'bpCapRate',
    column: 'bp_cap_rate',
    typeOf: 'number',
    operator: sqlOperator.LTE,
    applicableTypes:
      typeFilter?.options?.map((option: filterOptions) => option?.value) || [],
  },
  {
    filter: 'minAcqVintageDate',
    field: 'acqVintageDt',
    column: 'acq_vintage_dt',
    typeOf: 'date',
    operator: sqlOperator.GTE,
    applicableTypes:
      typeFilter?.options?.map((option: filterOptions) => option?.value) || [],
  },
  {
    filter: 'maxAcqVintageDate',
    field: 'acqVintageDt',
    column: 'acq_vintage_dt',
    typeOf: 'date',
    operator: sqlOperator.LTE,
    applicableTypes:
      typeFilter?.options?.map((option: filterOptions) => option?.value) || [],
  },
  {
    filter: 'city',
    field: 'city',
    column: 'city',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes: [CN_LOGISTICS]
  },
  {
    filter: 'dealName',
    field: 'dealName',
    column: 'deal_name',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes: [CN_LOGISTICS]
  },
  {
    filter: 'partner',
    field: 'partner',
    column: 'partner',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes: [CN_LOGISTICS]
  },
  {
    filter: 'cityTier',
    field: 'cityTier',
    column: 'city_tier',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes: [CN_LOGISTICS]
  },
  {
    filter: 'developmentStage',
    field: 'developmentStage',
    column: 'development_stage',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes: [CN_LOGISTICS]
  },
  {
    filter: 'dealStatus',
    field: 'dealStatus',
    column: 'deal_status',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes: [CN_LOGISTICS]
  },
  {
    filter: 'team',
    field: 'team',
    column: 'team',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes: [CN_LOGISTICS]
  },
  {
    filter: 'assetType',
    field: 'assetType',
    column: 'asset_type',
    typeOf: 'string',
    operator: sqlOperator.IN,
    applicableTypes: [CN_LOGISTICS]
  },
  {
    filter: 'gfaSqm',
    field: 'gfaSqm',
    column: 'gfa_sqm',
    typeOf: 'number',
    operator: sqlOperator.RANGE,
    applicableTypes: [CN_LOGISTICS]
  },
]
