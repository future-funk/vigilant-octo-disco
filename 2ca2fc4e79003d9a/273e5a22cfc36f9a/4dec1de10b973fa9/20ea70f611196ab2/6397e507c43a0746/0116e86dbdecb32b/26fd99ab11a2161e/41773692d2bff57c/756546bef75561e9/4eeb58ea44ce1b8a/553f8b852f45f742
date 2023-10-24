import {
  createSlice,
  DirectoryMapColorGroup,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { BpdFilterConfig, SortConfig } from '@bpd/bpd-web/shared/ui'
import { TABS } from '../../constants'

export interface State {
  selectedDirectoryFilters: BpdFilterConfig[]
  selectedDirectorySort: SortConfig
  selectedLogisticsSort?: SortConfig
  selectedDirectoryColorByValue: DirectoryMapColorGroup
  selectedLogisticsColorByValue?: string
  selectedDirectoryTab: string
  selectedDirectoryOverviewTab: string
}

export const selectedDirectoryFilters: BpdFilterConfig[] = [
  {
    field: 'bp_inv_status',
    type: 'EQ',
    value: [],
  },
  {
    field: 'prop_type_in',
    type: 'EQ',
    value: [],
  },
]

export const selectedDirectorySort = {
  field: 'propValuationUsd',
  order: 'desc' as const,
}

export const selectedLogisticsSort = {
  field: 'totalGlaSqm',
  order: 'desc' as const,
}

export const selectedDirectoryColorByValue = 'bpStatusWType'
export const selectedLogisticsColorByValue = 'projectName'
export const selectedDirectoryOverviewTab = TABS.CARD
export const selectedDirectoryTab = TABS.OVERVIEW

export const INITIAL_STATE: State = {
  selectedDirectoryFilters,
  selectedDirectorySort,
  selectedLogisticsSort,
  selectedDirectoryColorByValue,
  selectedLogisticsColorByValue,
  selectedDirectoryOverviewTab,
  selectedDirectoryTab,
}

export const DirectorySlice = createSlice({
  defaultState: INITIAL_STATE,
  reducers: {},
})

export const DirectoryActions = DirectorySlice.actions

export const DirectorySelectors = DirectorySlice.selectors

export default DirectorySlice
