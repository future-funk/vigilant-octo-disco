import {
  createSlice as createBaseSlice,
  SelectorReturn,
  StoreSliceProps,
} from '@bpd/bpd-web/shared/data-access'
import { BpdFilterConfig, SortConfig } from '@bpd/bpd-web/shared/ui'
import {
  createSelector,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit'
import { Directory } from '../types'

interface StateShape {
  selectedDirectoryFilters: BpdFilterConfig[]
  selectedDirectorySort?: SortConfig
  selectedLogisticsSort?: SortConfig
  selectedDirectoryColorByValue: string
  selectedLogisticsColorByValue?: string
  selectedDirectoryTab?: string
  selectedDirectoryOverviewTab?: string
  selectedDirectory?: Directory
}

export const DIRECTORY_SLICE_KEY = 'directory'

export function createSlice<
  T extends StateShape,
  R extends SliceCaseReducers<T>
>(props: Omit<StoreSliceProps<T, R>, 'sliceName'>) {
  const { defaultState, reducers: injectedReducers } = props

  const getRootState = (state: { directory: T }) =>
    state[DIRECTORY_SLICE_KEY] as T

  const baseSelectors = {
    getSelectedDirectoryFilters: createSelector(
      getRootState,
      (state) =>
        (state?.selectedDirectoryFilters as SelectorReturn<
          T,
          'selectedDirectoryFilters'
        >) ?? null
    ),
    getSelectedDirectorySort: createSelector(
      getRootState,
      (state) =>
        state?.selectedDirectorySort as SelectorReturn<
          T,
          'selectedDirectorySort'
        >
    ),
    getSelectedLogisticsSort: createSelector(
      getRootState,
      (state) =>
        state?.selectedLogisticsSort as SelectorReturn<
          T,
          'selectedLogisticsSort'
        >
    ),
    getSelectedDirectoryColorByValue: createSelector(
      getRootState,
      (state) =>
        state?.selectedDirectoryColorByValue as SelectorReturn<
          T,
          'selectedDirectoryColorByValue'
        >
    ),
    getSelectedLogisticsColorByValue: createSelector(
      getRootState,
      (state) =>
        state?.selectedLogisticsColorByValue as SelectorReturn<
          T,
          'selectedLogisticsColorByValue'
        >
    ),
    getSelectedDirectoryTab: createSelector(
      getRootState,
      (state) =>
        state?.selectedDirectoryTab as SelectorReturn<T, 'selectedDirectoryTab'>
    ),
    getSelectedDirectoryOverviewTab: createSelector(
      getRootState,
      (state) =>
        state?.selectedDirectoryOverviewTab as SelectorReturn<
          T,
          'selectedDirectoryOverviewTab'
        >
    ),
    getSelectedDirectory: createSelector(
      getRootState,
      (state) =>
        state?.selectedDirectory as SelectorReturn<T, 'selectedDirectory'>
    ),
  }

  const selectors = {
    ...baseSelectors,
    getRootState,
  }

  const baseReducers = {
    setSelectedDirectoryFilters: (
      state: T,
      action: PayloadAction<T['selectedDirectoryFilters']>
    ) => {
      state.selectedDirectoryFilters = action.payload
    },
    setSelectedDirectorySort: (
      state: T,
      action: PayloadAction<T['selectedDirectorySort']>
    ) => {
      state.selectedDirectorySort = action.payload
    },
    setSelectedLogisticsSort: (
      state: T,
      action: PayloadAction<T['selectedLogisticsSort']>
    ) => {
      state.selectedLogisticsSort = action.payload
    },
    setSelectedDirectoryColorByValue: (
      state: T,
      action: PayloadAction<T['selectedDirectoryColorByValue']>
    ) => {
      state.selectedDirectoryColorByValue = action.payload
    },
    setSelectedLogisticsColorByValue: (
      state: T,
      action: PayloadAction<T['selectedLogisticsColorByValue']>
    ) => {
      state.selectedLogisticsColorByValue = action.payload
    },
    setSelectedDirectoryTab: (
      state: T,
      action: PayloadAction<T['selectedDirectoryTab']>
    ) => {
      state.selectedDirectoryTab = action.payload
    },
    setSelectedDirectoryOverviewTab: (
      state: T,
      action: PayloadAction<T['selectedDirectoryOverviewTab']>
    ) => {
      state.selectedDirectoryOverviewTab = action.payload
    },
    setSelectedDirectory: (
      state: T,
      action: PayloadAction<T['selectedDirectory']>
    ) => {
      state.selectedDirectory = action.payload
    },
  }

  const reducers = {
    ...baseReducers,
    ...injectedReducers,
  }

  const slice = createBaseSlice<T, R & typeof baseReducers>({
    sliceName: DIRECTORY_SLICE_KEY,
    defaultState,
    reducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}

export default createSlice
