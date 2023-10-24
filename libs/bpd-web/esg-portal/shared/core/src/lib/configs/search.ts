import { snakeCase } from 'lodash'
import { FILTER_COLUMN } from '../constants'

export type TypeOf = 'number' | 'string' | 'date'
export interface searchPresetProps {
  filter: string
  field: string
  column: string
  typeOf: TypeOf
  operator: string
}

export const sqlOperator = {
  IN: 'IN',
}

export const searchPreset: searchPresetProps[] = [
  {
    filter: FILTER_COLUMN.COLUMN_REGION,
    field: FILTER_COLUMN.COLUMN_REGION,
    column: snakeCase(FILTER_COLUMN.COLUMN_REGION),
    typeOf: 'string',
    operator: sqlOperator.IN,
  },
  {
    filter: FILTER_COLUMN.COLUMN_SECTOR,
    field: FILTER_COLUMN.COLUMN_SECTOR,
    column: snakeCase(FILTER_COLUMN.COLUMN_SECTOR),
    typeOf: 'string',
    operator: sqlOperator.IN,
  },
  {
    filter: FILTER_COLUMN.COLUMN_BUCKET,
    field: FILTER_COLUMN.COLUMN_BUCKET,
    column: snakeCase(FILTER_COLUMN.COLUMN_BUCKET),
    typeOf: 'number',
    operator: sqlOperator.IN,
  },
  {
    filter: FILTER_COLUMN.COLUMN_STORM_SURGE_RISK_RATING,
    field: FILTER_COLUMN.COLUMN_STORM_SURGE_RISK_RATING,
    column: snakeCase(FILTER_COLUMN.COLUMN_STORM_SURGE_RISK_RATING),
    typeOf: 'number',
    operator: sqlOperator.IN,
  },
  {
    filter: FILTER_COLUMN.COLUMN_HURRICANE_RISK_RATING,
    field: FILTER_COLUMN.COLUMN_HURRICANE_RISK_RATING,
    column: snakeCase(FILTER_COLUMN.COLUMN_HURRICANE_RISK_RATING),
    typeOf: 'number',
    operator: sqlOperator.IN,
  },
  {
    filter: FILTER_COLUMN.COLUMN_INLAND_FLOOR_RISK_RATING,
    field: FILTER_COLUMN.COLUMN_INLAND_FLOOR_RISK_RATING,
    column: snakeCase(FILTER_COLUMN.COLUMN_INLAND_FLOOR_RISK_RATING),
    typeOf: 'number',
    operator: sqlOperator.IN,
  },
  {
    filter: FILTER_COLUMN.COLUMN_WILDFIRE_RISK_RATING,
    field: FILTER_COLUMN.COLUMN_WILDFIRE_RISK_RATING,
    column: snakeCase(FILTER_COLUMN.COLUMN_WILDFIRE_RISK_RATING),
    typeOf: 'number',
    operator: sqlOperator.IN,
  },
]
