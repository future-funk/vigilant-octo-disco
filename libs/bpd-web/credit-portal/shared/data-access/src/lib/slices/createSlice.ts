import {
  createSlice as createBaseSlice,
  SelectorReturn,
  StoreSliceProps,
} from '@bpd/bpd-web/shared/data-access'
import { createSelector, SliceCaseReducers } from '@reduxjs/toolkit'

interface StateShape {
  reportingDate: string
}

export const CREDIT_PORTAL_SLICE_KEY = 'credit-portal'

export const createSlice = <
  T extends StateShape,
  R extends SliceCaseReducers<T>
>(
  props: Omit<StoreSliceProps<T, R>, 'sliceName'>
) => {
  const { defaultState, reducers: injectReducers } = props

  const getRootState = (state: { expert: T }) =>
    state[CREDIT_PORTAL_SLICE_KEY] as T

  const baseSelectors = {
    getSelectedResearch: createSelector(
      getRootState,
      (state) => state?.reportingDate as SelectorReturn<T, 'reportingDate'>
    ),
  }

  const selectors = { ...baseSelectors }

  const baseReducers = {
    // setReportingDate: (
    //   state: T,
    //   action: PayloadAction<T['reportingDate']>
    // ) => {
    //   state.reportingDate = action.payload
    // },
  }

  const reducers = {
    ...baseReducers,
    ...injectReducers,
  }

  const slice = createBaseSlice<T, R & typeof baseReducers>({
    sliceName: CREDIT_PORTAL_SLICE_KEY,
    defaultState,
    reducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}

export default createSlice
