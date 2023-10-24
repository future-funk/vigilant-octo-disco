import {
  MyWorkspaceApi,
  WorkspaceConfig,
  createSlice,
} from '@bpd/my-workspace/shared/data-access'
import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { DEFAULT_WORKSPACE_CONFIG, MY_DEALS_ITEM_KEY } from '../../constants'

export interface SliceState {
  dealOverviewSelectValue: string
  isFetching: boolean
  workspaceConfig: WorkspaceConfig
  isLoadingWorkspaceConfig: boolean
}

const defaultState: SliceState = {
  dealOverviewSelectValue: MY_DEALS_ITEM_KEY,
  isFetching: false,
  workspaceConfig: DEFAULT_WORKSPACE_CONFIG,
  isLoadingWorkspaceConfig: false,
}

const extraReducers = (builder: ActionReducerMapBuilder<SliceState>) => {
  builder.addMatcher(
    MyWorkspaceApi.endpoints.getMyWorkspaceConfig.matchFulfilled,
    (state, action) => {
      state.workspaceConfig = action.payload
      state.isLoadingWorkspaceConfig = false
    }
  )
  builder.addMatcher(
    MyWorkspaceApi.endpoints.getMyWorkspaceConfig.matchPending,
    (state, action) => {
      state.isLoadingWorkspaceConfig = Boolean(action.meta)
    }
  )
  builder.addMatcher(
    MyWorkspaceApi.endpoints.putMyWorkspaceConfig.matchFulfilled,
    (state, action) => {
      state.workspaceConfig = action.payload
    }
  )
}

const slice = createSlice({ defaultState, reducers: {}, extraReducers })

export const MyWorkspaceActions = slice.actions

export const MyWorkspaceSelectors = slice.selectors

export default slice
