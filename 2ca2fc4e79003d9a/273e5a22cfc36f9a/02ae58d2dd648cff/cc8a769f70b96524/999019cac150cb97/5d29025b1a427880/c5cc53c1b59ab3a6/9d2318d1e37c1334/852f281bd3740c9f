import {
  createSlice as createBaseSlice,
  SelectorReturn,
  StoreSliceProps,
} from '@bpd/bpd-web/shared/data-access'
import { BpdFilterConfig } from '@bpd/bpd-web/shared/ui'
import {
  createSelector,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit'
import { ESGPortalRequestPayload } from '../types'

interface StateShape extends ESGPortalRequestPayload {
  colorByValue: string
  selectedCoreTab: string
  selectedOverviewTab: string
  isDrawerExpanded: boolean
  selectedRecord: ESGPortalRequestPayload
  selectedFilters: BpdFilterConfig[]
  selectedCaseStudyId: number
  isDrawerBannerVisible: boolean
}

export const ESG_PORTAL_SLICE_KEY = 'esgPortal'

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

  const getRootState = (state: { ESGPortal: T }) =>
    state[ESG_PORTAL_SLICE_KEY] as T

  const baseSelectors = {
    getRootState: createSelector(getRootState, (state) => state),
    getColorByValue: createSelector(
      getRootState,
      (state) => state?.colorByValue as SelectorReturn<T, 'colorByValue'>
    ),
    getSelectedCoreTab: createSelector(
      getRootState,
      (state) => state?.selectedCoreTab as SelectorReturn<T, 'selectedCoreTab'>
    ),
    getSelectedOverviewTab: createSelector(
      getRootState,
      (state) =>
        state?.selectedOverviewTab as SelectorReturn<T, 'selectedOverviewTab'>
    ),
    getIsDrawerExpanded: createSelector(
      getRootState,
      (state) =>
        state?.isDrawerExpanded as SelectorReturn<T, 'isDrawerExpanded'>
    ),
    getSelectedRecord: createSelector(
      getRootState,
      (state) => state?.selectedRecord as SelectorReturn<T, 'selectedRecord'>
    ),
    getSelectedFilters: createSelector(
      getRootState,
      (state) => state?.selectedFilters as SelectorReturn<T, 'selectedFilters'>
    ),
    getSelectedCaseStudyId: createSelector(
      getRootState,
      (state) =>
        state?.selectedCaseStudyId as SelectorReturn<T, 'selectedCaseStudyId'>
    ),
    getIsDrawerBannerVisible: createSelector(
      getRootState,
      (state) =>
        state?.isDrawerBannerVisible as SelectorReturn<
          T,
          'isDrawerBannerVisible'
        >
    ),
  }

  const selectors = { ...baseSelectors }

  const baseReducers = {
    setColorByValue: (state: T, action: PayloadAction<T['colorByValue']>) => {
      state.colorByValue = action.payload
    },
    setSelectedCoreTab: (
      state: T,
      action: PayloadAction<T['selectedCoreTab']>
    ) => {
      state.selectedCoreTab = action.payload
    },
    setSelectedOverviewTab: (
      state: T,
      action: PayloadAction<T['selectedOverviewTab']>
    ) => {
      state.selectedOverviewTab = action.payload
    },
    toggleIsDrawerExpanded: (state: T) => {
      state.isDrawerExpanded = !state.isDrawerExpanded
    },
    setSelectedRecord: (
      state: T,
      action: PayloadAction<T['selectedRecord']>
    ) => {
      state.selectedRecord = action.payload
    },
    setSelectedFilters: (
      state: T,
      action: PayloadAction<T['selectedFilters']>
    ) => {
      state.selectedFilters = action.payload
    },
    setSelectedCaseStudyId: (
      state: T,
      action: PayloadAction<T['selectedCaseStudyId']>
    ) => {
      state.selectedCaseStudyId = action.payload
    },
    toggleIsDrawerBannerVisible: (state: T) => {
      state.isDrawerBannerVisible = !state.isDrawerBannerVisible
    },
  }

  const reducers = {
    ...baseReducers,
    ...injectedReducers,
  }

  const slice = createBaseSlice<T, R & typeof baseReducers>({
    sliceName: ESG_PORTAL_SLICE_KEY,
    defaultState,
    reducers,
    extraReducers: injectedExtraReducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}

export default createSlice
