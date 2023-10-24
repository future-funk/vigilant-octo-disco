import {
  SelectorReturn,
  StoreSliceProps,
  createSlice as createBaseSlice,
} from '@bpd/bpd-web/shared/data-access'
import {
  PayloadAction,
  SliceCaseReducers,
  createSelector,
} from '@reduxjs/toolkit'
import { WorkspaceConfig } from '../types'

export const MY_WORKSPACE_SLICE_KEY = 'myWorkspace'

interface StateShape {
  dealOverviewSelectValue?: string
  isFetching?: boolean
  workspaceConfig: WorkspaceConfig
  isLoadingWorkspaceConfig: boolean
}

export const createSlice = <
  T extends StateShape,
  R extends SliceCaseReducers<T>
>(
  props: Omit<StoreSliceProps<T, R>, 'sliceName'>
) => {
  const {
    defaultState,
    reducers: injectedReducers,
    extraReducers: injectedExtraReducers,
  } = props

  const getRootState = (state: { myWorkspace: T }) =>
    state[MY_WORKSPACE_SLICE_KEY] as T

  const baseSelectors = {
    getIsFetching: createSelector(
      getRootState,
      (state) => state?.isFetching as SelectorReturn<T, 'isFetching'>
    ),
    getDealOverviewSelectValue: createSelector(
      getRootState,
      (state) =>
        state?.dealOverviewSelectValue as SelectorReturn<
          T,
          'dealOverviewSelectValue'
        >
    ),
    getMyWorkspaceConfig: createSelector(
      getRootState,
      (state) => state?.workspaceConfig as SelectorReturn<T, 'workspaceConfig'>
    ),
    getIsLoadingWorkspaceConfig: createSelector(
      getRootState,
      (state) =>
        state?.isLoadingWorkspaceConfig as SelectorReturn<
          T,
          'isLoadingWorkspaceConfig'
        >
    ),
  }

  const selectors = { ...baseSelectors }

  const baseReducers = {
    setIsFetching: (state: T, action: PayloadAction<T['isFetching']>) => {
      state.isFetching = action.payload
    },
    setDealOverviewSelectValue: (
      state: T,
      action: PayloadAction<T['dealOverviewSelectValue']>
    ) => {
      state.dealOverviewSelectValue = action.payload
    },
  }

  const reducers = {
    ...baseReducers,
    ...injectedReducers,
  }

  const slice = createBaseSlice<T, R & typeof baseReducers>({
    sliceName: MY_WORKSPACE_SLICE_KEY,
    defaultState,
    reducers,
    extraReducers: injectedExtraReducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}
