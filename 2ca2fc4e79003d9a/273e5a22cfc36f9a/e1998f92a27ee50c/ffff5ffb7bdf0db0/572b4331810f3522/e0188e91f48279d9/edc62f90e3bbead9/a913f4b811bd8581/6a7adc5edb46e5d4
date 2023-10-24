import {
  createSlice as createBaseSlice,
  SelectorReturn,
  StoreSliceProps,
} from '@bpd/bpd-web/shared/data-access'
import {
  createSelector,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit'

interface StateShape {
  selectedResearch: unknown,
  selectedCaseStudy: unknown
}

export const RESEARCH_SLICE_KEY = 'esg-ade-portal'

export const createSlice = <
  T extends StateShape,
  R extends SliceCaseReducers<T>
>(
  props: Omit<StoreSliceProps<T, R>, 'sliceName'>
) => {
  const { defaultState, reducers: injectReducers } = props

  const getRootState = (state: { expert: T }) => state[RESEARCH_SLICE_KEY] as T

  const baseSelectors = {
    getSelectedResearch: createSelector(
      getRootState,
      (state) =>
        state?.selectedResearch as SelectorReturn<T, 'selectedResearch'>
    ),
    getSelectedCaseStudy: createSelector(
      getRootState,
      (state) =>
        state?.selectedCaseStudy as SelectorReturn<T, 'selectedCaseStudy'>
    ),
  }

  const selectors = { ...baseSelectors }

  const baseReducers = {
    setSelectedResearch: (
      state: T,
      action: PayloadAction<T['selectedResearch']>
    ) => {
      state.selectedResearch = action.payload
    },
    setSelectedCaseStudy: (
      state: T,
      action: PayloadAction<T['selectedCaseStudy']>
    ) => {
      state.selectedCaseStudy = action.payload
    },
  }

  const reducers = {
    ...baseReducers,
    ...injectReducers,
  }

  const slice = createBaseSlice<T, R & typeof baseReducers>({
    sliceName: RESEARCH_SLICE_KEY,
    defaultState,
    reducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}

export default createSlice
