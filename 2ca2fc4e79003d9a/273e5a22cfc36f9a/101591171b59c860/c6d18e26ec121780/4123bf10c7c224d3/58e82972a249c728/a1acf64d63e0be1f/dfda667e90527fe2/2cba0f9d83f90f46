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
import { cloneDeep, get } from 'lodash'

export interface StateShape {
  [key: string]: {
    initial: any
    values: any
  }
}

export const REDUX_FORM_SLICE_KEY = 'form'

export function createSlice<
  T extends StateShape,
  R extends SliceCaseReducers<T>
>(props: Omit<StoreSliceProps<T, R>, 'sliceName'>) {
  const { defaultState, reducers: injectedReducers } = props

  const getRootState = (state: { form: T }) => state[REDUX_FORM_SLICE_KEY] as T

  const baseSelectors = {
    getForm: createSelector(
      [getRootState, (_, form) => form],
      (state, form) => state?.[form]
    ),
    getFormFieldValue: createSelector(
      [getRootState, (_, options: { form: string; path: string }) => options],
      (state, { form, path }) => get(state?.[form]?.values, path)
    ),
  }

  const selectors = {
    ...baseSelectors,
    getRootState,
  }

  const baseReducers = {
    initialize: (
      state: T,
      action: PayloadAction<{
        meta: { form: keyof T }
        payload: any
        options: any
      }>
    ) => {
      const {
        meta: { form },
        payload,
        options,
      } = action.payload
      state[form] = {
        initial: cloneDeep(payload),
        values: cloneDeep(payload),
      } as T[keyof T]
    },
  }

  const reducers = {
    ...baseReducers,
    ...injectedReducers,
  }

  const slice = createBaseSlice<T, R & typeof baseReducers>({
    sliceName: REDUX_FORM_SLICE_KEY,
    defaultState,
    reducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}

export default createSlice
