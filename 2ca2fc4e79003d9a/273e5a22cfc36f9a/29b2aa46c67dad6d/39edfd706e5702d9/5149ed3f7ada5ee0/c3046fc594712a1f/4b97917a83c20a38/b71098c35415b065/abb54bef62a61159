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
  filters: unknown
}

export const MSA_EXPOSURE_SLICE_KEY = 'msaExposure'

export const createSlice = <
  T extends StateShape,
  R extends SliceCaseReducers<T>
>(
  props: Omit<StoreSliceProps<T, R>, 'sliceName'>
) => {
  const { defaultState, reducers: injectedReducers } = props

  const getRootState = (state: { msaExposure: T }) =>
    state[MSA_EXPOSURE_SLICE_KEY] as T

  const baseSelectors = {
    getFilters: createSelector(
      getRootState,
      (state) => state?.filters as SelectorReturn<T, 'filters'>
    ),
    getIsStateRegistered: createSelector(
      getRootState,
      (state) => !!state as boolean
    ),
  }

  const selectors = { ...baseSelectors }

  const baseReducers = {
    addFilter: (state: T, action: PayloadAction<Partial<T['filters']>>) => {
      state.filters = {
        ...(state.filters as PayloadAction<T['filters']>),
        ...(action.payload as PayloadAction<T['filters']>),
      }
    },
    setFilters: (state: T, action: PayloadAction<T['filters']>) => {
      state.filters = action.payload
    },
  }

  const reducers = {
    ...baseReducers,
    ...injectedReducers,
  }

  const slice = createBaseSlice<T, R & typeof baseReducers>({
    sliceName: MSA_EXPOSURE_SLICE_KEY,
    defaultState,
    reducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}

export default createSlice
