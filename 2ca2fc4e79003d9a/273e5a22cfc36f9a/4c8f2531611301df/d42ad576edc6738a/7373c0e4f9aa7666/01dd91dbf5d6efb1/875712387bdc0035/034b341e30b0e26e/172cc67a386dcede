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
  staff?: unknown
  sort?: unknown
  isFetching?: boolean
  getDealsArgs?: unknown
}

export const INVESTMENT_PROCESS_SLICE_KEY = 'investmentProcess'

export const createSlice = <
  T extends StateShape,
  R extends SliceCaseReducers<T>
>(
  props: Omit<StoreSliceProps<T, R>, 'sliceName'>
) => {
  const { defaultState, reducers: injectedReducers } = props

  const getRootState = (state: { investmentProcess: T }) =>
    state[INVESTMENT_PROCESS_SLICE_KEY] as T

  const baseSelectors = {
    getFilters: createSelector(
      getRootState,
      (state) => state?.filters as SelectorReturn<T, 'filters'>
    ),
    getStaff: createSelector(
      getRootState,
      (state) => state?.staff as SelectorReturn<T, 'staff'>
    ),
    getSort: createSelector(
      getRootState,
      (state) => state?.sort as SelectorReturn<T, 'sort'>
    ),
    getIsFetching: createSelector(
      getRootState,
      (state) => state?.isFetching as SelectorReturn<T, 'isFetching'>
    ),
    getGetDealsArgs: createSelector(
      getRootState,
      (state) => state?.getDealsArgs as SelectorReturn<T, 'getDealsArgs'>
    ),
  }

  const selectors = { ...baseSelectors }

  const baseReducers = {
    addFilter: (state: T, action: PayloadAction<T['filters']>) => {
      state.filters = {
        ...(state.filters as PayloadAction<T['filters']>),
        ...(action.payload as PayloadAction<T['filters']>),
      }
    },
    setFilters: (state: T, action: PayloadAction<T['filters']>) => {
      state.filters = action.payload
    },
    setStaff: (state: T, action: PayloadAction<T['staff']>) => {
      state.staff = action.payload
    },
    setSort: (state: T, action: PayloadAction<T['sort']>) => {
      state.sort = action.payload
    },
    setIsFetching: (state: T, action: PayloadAction<T['isFetching']>) => {
      state.isFetching = action.payload
    },
    setGetDealsArgs: (state: T, action: PayloadAction<T['getDealsArgs']>) => {
      state.getDealsArgs = action.payload
    },
  }

  const reducers = {
    ...baseReducers,
    ...injectedReducers,
  }

  const slice = createBaseSlice<T, R & typeof baseReducers>({
    sliceName: INVESTMENT_PROCESS_SLICE_KEY,
    defaultState,
    reducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}

export default createSlice
