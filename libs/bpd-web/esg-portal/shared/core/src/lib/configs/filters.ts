import { values, map } from 'lodash'
import { BpdFilterComponent } from '@bpd/bpd-web/shared/ui'
import {
  FILTER_REGION_VALUES,
  FILTER_SECTOR_VALUES,
  FILTER_STORM_SURGE_VALUES,
  FILTER_HURRICANE_RISK_VALUES,
  FILTER_FLOOD_RISK_VALUES,
  FILTER_WILDFIRE_RISK_VALUES,
  FILTER_COLUMN,
  FILTER_GREEN_CERT_BUCKET_VALUES,
} from '../constants'

const getMappedItems = (values: Record<string, number>) =>
  map(values, (value, key) => ({ label: key, value }))

export interface filterOptions extends Pick<BpdFilterComponent, 'options'> {
  value: string
  label: string
}

export const regionFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Region',
  field: FILTER_COLUMN.COLUMN_REGION,
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: values(FILTER_REGION_VALUES),
}

export const sectorFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Sector',
  field: FILTER_COLUMN.COLUMN_SECTOR,
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: values(FILTER_SECTOR_VALUES),
}

export const stormSergeRiskRatingFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Storm Serge Risk Rating',
  field: FILTER_COLUMN.COLUMN_STORM_SURGE_RISK_RATING,
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: getMappedItems(FILTER_STORM_SURGE_VALUES),
}

export const hurricaneRiskRatingFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Hurricane Risk Rating',
  field: FILTER_COLUMN.COLUMN_HURRICANE_RISK_RATING,
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: getMappedItems(FILTER_HURRICANE_RISK_VALUES),
}

export const inlandFloodRiskRatingFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Inland Flood Risk Rating',
  field: FILTER_COLUMN.COLUMN_INLAND_FLOOR_RISK_RATING,
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: getMappedItems(FILTER_FLOOD_RISK_VALUES),
  visibility: { display: { sm: 'none', xxl: 'block' } },
}

export const wildfireRiskRatingFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Wildfire Risk Rating',
  field: FILTER_COLUMN.COLUMN_WILDFIRE_RISK_RATING,
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: getMappedItems(FILTER_WILDFIRE_RISK_VALUES),
  visibility: { display: { sm: 'none', xxl: 'block' } },
}

export const greenCertBucketFilter: BpdFilterComponent = {
  asModal: false,
  label: 'Green Cert Bucket',
  field: FILTER_COLUMN.COLUMN_BUCKET,
  type: 'EQ',
  component: 'MULTI_SELECT',
  placeholder: 'Select',
  options: getMappedItems(FILTER_GREEN_CERT_BUCKET_VALUES),
  visibility: { display: { sm: 'none', xxl: 'block' } },
}

export const filterMore: BpdFilterComponent = {
  asModal: true,
  label: 'More Filters',
  field: 'more',
  children: [
    {
      ...inlandFloodRiskRatingFilter,
      visibility: { display: { sm: 'none', lg: 'flex' } },
    },
    {
      ...wildfireRiskRatingFilter,
      visibility: { display: { sm: 'none', xl: 'flex' } },
    },
    {
      ...greenCertBucketFilter,
      visibility: { display: { sm: 'none', xl: 'flex' } },
    },
  ],
  visibility: { display: { sm: 'flex', xxl: 'none' } },
}
