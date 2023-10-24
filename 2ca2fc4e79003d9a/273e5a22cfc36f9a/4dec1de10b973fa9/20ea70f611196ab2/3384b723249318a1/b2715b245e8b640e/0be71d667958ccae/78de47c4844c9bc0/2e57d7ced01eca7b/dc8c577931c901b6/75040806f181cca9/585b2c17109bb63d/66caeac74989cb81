import { createSlice, DirectoryMapColorGroup, TABS, DirectoryLogisticsDto } from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { BpdFilterConfig, SortConfig } from '@bpd/bpd-web/shared/ui'

interface State {
    selectedDirectoryFilters: BpdFilterConfig[],
    selectedDirectoryColorByValue: DirectoryMapColorGroup,
    selectedDirectorySort?: SortConfig,
    selectedDirectoryOverviewTab: string | null
    selectedDirectory: DirectoryLogisticsDto | null
}

export const selectedDirectoryFilters: BpdFilterConfig[] = []

export const selectedDirectory = null

export const selectedDirectorySort = {}

export const selectedDirectoryColorByValue = 'assetType'
export const selectedDirectoryOverviewTab = TABS.CARD

const defaultState: State = {
    selectedDirectoryFilters,
    selectedDirectoryColorByValue,
    selectedDirectoryOverviewTab,
    selectedDirectory
}

const DirectorySlice = createSlice({
    defaultState,
    reducers: {}
})


export const DirectoryActions = DirectorySlice.actions

export const DirectorySelectors = DirectorySlice.selectors

export default DirectorySlice
