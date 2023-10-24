import { createSlice } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import {
  State as DirectoryState,
  INITIAL_STATE as DEFAULT_INITIAL_STATE,
} from '@bpd/bpd-web/directory/feature-shell/shared/directory'
import { createSelector, PayloadAction } from '@reduxjs/toolkit'
import { LogisticsResponseDto } from '../types'
import { TOTAL_GLA_CHART, TENANCY_WALE_PROFILE_CHART_BY_SPACE, TENANT_EXPOSURE_CHART_BY_SECTOR } from '../../constants'

interface LogisticsDirectoryState
  extends Omit<DirectoryState, 'selectedDirectoryFilters'> {
  selectedAssets: LogisticsResponseDto[]
  selectedDirectoryFilters: Record<string, string | string[]> | null
  selectedAnalyticsChartType: string
  selectedTenancyChartType: string
  selectedTenantExposureChartType: string
  selectedMapAssetType: string | null
}

const INITIAL_STATE: LogisticsDirectoryState = {
  ...DEFAULT_INITIAL_STATE,
  selectedDirectoryFilters: null,
  selectedAssets: [],
  selectedAnalyticsChartType: TOTAL_GLA_CHART,
  selectedTenancyChartType: TENANCY_WALE_PROFILE_CHART_BY_SPACE,
  selectedTenantExposureChartType: TENANT_EXPOSURE_CHART_BY_SECTOR,
  selectedMapAssetType: null,
}

const DirectorySlice = createSlice({
  defaultState: INITIAL_STATE,
  reducers: {
    setSelectedAssets: (
      state: LogisticsDirectoryState,
      action: PayloadAction<LogisticsResponseDto[]>
    ) => {
      state.selectedAssets = action.payload
    },
    setSelectedAnalyticsChartType: (
      state: LogisticsDirectoryState,
      action: PayloadAction<string>
    ) => {
      state.selectedAnalyticsChartType = action.payload
    },
    setSelectedTenancyChartType: (
      state: LogisticsDirectoryState,
      action: PayloadAction<string>
    ) => {
      state.selectedTenancyChartType = action.payload
    },
    setSelectedTenantExposureChartType: (
      state: LogisticsDirectoryState,
      action: PayloadAction<string>
    ) => {
      state.selectedTenantExposureChartType = action.payload
    },
    setSelectedMapAssetType: (
      state: LogisticsDirectoryState,
      action: PayloadAction<string>
    ) => {
      state.selectedMapAssetType = action.payload
    },
  },
})

const { getRootState, ...restBaseSelectors } = DirectorySlice.selectors
const selectors = {
  ...restBaseSelectors,
  getSelectedAssets: createSelector(
    getRootState,
    (state: LogisticsDirectoryState) => state?.selectedAssets
  ),
  getSelectedAnalyticsChartType: createSelector(
    getRootState,
    (state: LogisticsDirectoryState) => state?.selectedAnalyticsChartType
  ),
  getSelectedTenancyChartType: createSelector(
    getRootState,
    (state: LogisticsDirectoryState) => state?.selectedTenancyChartType
  ),
  getSelectedTenantExposureChartType: createSelector(
    getRootState,
    (state: LogisticsDirectoryState) => state?.selectedTenantExposureChartType
  ),
  getSelectedMapAssetType: createSelector(
    getRootState,
    (state: LogisticsDirectoryState) => state?.selectedMapAssetType
  ),
}
export const DirectoryActions = DirectorySlice.actions

export const DirectorySelectors = selectors

export default DirectorySlice
