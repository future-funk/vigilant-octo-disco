import { values } from 'lodash'
import { BpdFilterConfig } from '@bpd/bpd-web/shared/ui'
import {
  createSlice,
  ESGPortalRequestPayload,
} from '@bpd/esg-portal/shared/data-access'
import {
  COLOR_BY_COLUMN,
  TAB_OVERVIEW,
  TAB_CARD,
  FILTER_COLUMN,
  FILTER_WILDFIRE_RISK_VALUES,
  FILTER_HURRICANE_RISK_VALUES,
  FILTER_FLOOD_RISK_VALUES,
  FILTER_REGION_VALUES,
  FILTER_SECTOR_VALUES,
  FILTER_GREEN_CERT_BUCKET_VALUES,
  FILTER_STORM_SURGE_VALUES,
} from '../../constants'

export interface SliceState {
  colorByValue: string
  selectedCoreTab: string
  selectedOverviewTab: string
  isDrawerExpanded: boolean
  selectedRecord: ESGPortalRequestPayload
  selectedFilters: BpdFilterConfig[]
  selectedCaseStudyId: number | null
  isDrawerBannerVisible: boolean
}

export const INITIAL_STATE: SliceState = {
  colorByValue: COLOR_BY_COLUMN.BUCKET,
  selectedCoreTab: TAB_OVERVIEW,
  selectedOverviewTab: TAB_CARD,
  isDrawerExpanded: false,
  selectedRecord: null,
  selectedFilters: [
    {
      type: 'EQ',
      field: FILTER_COLUMN.COLUMN_WILDFIRE_RISK_RATING,
      value: values(FILTER_WILDFIRE_RISK_VALUES),
    },
    {
      type: 'EQ',
      field: FILTER_COLUMN.COLUMN_HURRICANE_RISK_RATING,
      value: values(FILTER_HURRICANE_RISK_VALUES),
    },
    {
      type: 'EQ',
      field: FILTER_COLUMN.COLUMN_INLAND_FLOOR_RISK_RATING,
      value: values(FILTER_FLOOD_RISK_VALUES),
    },
    {
      type: 'EQ',
      field: FILTER_COLUMN.COLUMN_STORM_SURGE_RISK_RATING,
      value: values(FILTER_STORM_SURGE_VALUES),
    },
    {
      type: 'EQ',
      field: FILTER_COLUMN.COLUMN_REGION,
      value: values(FILTER_REGION_VALUES),
    },
    {
      type: 'EQ',
      field: FILTER_COLUMN.COLUMN_SECTOR,
      value: values(FILTER_SECTOR_VALUES),
    },
    {
      type: 'EQ',
      field: FILTER_COLUMN.COLUMN_BUCKET,
      value: values(FILTER_GREEN_CERT_BUCKET_VALUES),
    },
  ],
  selectedCaseStudyId: null,
  isDrawerBannerVisible: true,
}

export const slice = createSlice({
  defaultState: INITIAL_STATE,
  reducers: {},
})

export const EsgPortalActions = slice.actions

const baseSelectors = slice.selectors

const selectors = {
  ...baseSelectors,
}

export const EsgPortalSelectors = selectors

export default slice
