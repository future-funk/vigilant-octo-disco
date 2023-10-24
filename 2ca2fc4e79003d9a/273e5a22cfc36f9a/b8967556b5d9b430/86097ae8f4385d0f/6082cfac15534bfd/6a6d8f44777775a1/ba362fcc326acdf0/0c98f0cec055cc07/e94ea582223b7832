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
  metaData: unknown
}

export const MV_IRR_SLICE_KEY = 'mvIrr'

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

  const getRootState = (state: { irrState: T }) => state[MV_IRR_SLICE_KEY] as T

  const baseSelectors = {
    getFilters: createSelector(
      getRootState,
      (state) => state?.filters as SelectorReturn<T, 'filters'>
    ),
    getIsStateRegistered: createSelector(
      getRootState,
      (state) => !!state as boolean
    ),
    getMetaData: createSelector(
      getRootState,
      (state) => state?.metaData as SelectorReturn<T, 'metaData'>
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
    sliceName: MV_IRR_SLICE_KEY,
    defaultState,
    reducers,
    extraReducers: injectedExtraReducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}

export default createSlice
