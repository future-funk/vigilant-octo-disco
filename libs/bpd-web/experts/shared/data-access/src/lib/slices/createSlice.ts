import {
  createSlice as createBaseSlice,
  StoreSliceProps,
} from '@bpd/bpd-web/shared/data-access'
import {
  createSelector,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit'

import { BaseFilter, SectorExpert } from '../types'
import { DEAL_STATUS, PERIODS, TOP_N } from '../constants'
import { getValuesFromConst } from '../utils'
import { get } from 'lodash'

interface StateShape {
  baseFilters: BaseFilter
  isDealModalOpen: boolean
  selectedExpertId: string
  hoveredExpert: SectorExpert
}

export const EXPERT_SLICE_KEY = 'experts'

export const createSlice = <
  T extends StateShape,
  R extends SliceCaseReducers<T>
>(
  props: Omit<StoreSliceProps<T, R>, 'sliceName'>
) => {
  const { defaultState, reducers: injectedReducers } = props

  const getRootState = (state: { expert: T }) => state[EXPERT_SLICE_KEY] as T

  const baseSelectors = {
    getBaseFilters: createSelector(getRootState, (state) => state?.baseFilters),
    getIsDealModalOpen: createSelector(
      getRootState,
      (state) => state?.isDealModalOpen
    ),
    getSelectedExpertId: createSelector(
      getRootState,
      (state) => state?.selectedExpertId
    ),
    getHoveredExpert: createSelector(
      getRootState,
      (state) => state?.hoveredExpert
    ),
    getFilters: createSelector(getRootState, (state) => {
      const { corporateTitle, dealStatus, period, topN, viewBy } =
        state?.baseFilters || {}
      return {
        topN: get(TOP_N, topN),
        monthsAgo: get(PERIODS, period),
        corpTitle: corporateTitle,
        dealStatus: getValuesFromConst(DEAL_STATUS, dealStatus),
        breakdownBy: viewBy || '',
      }
    }),
  }

  const selectors = { ...baseSelectors }

  const baseReducers = {
    setBaseFilters: (state: T, action: PayloadAction<T['baseFilters']>) => {
      state.baseFilters = action.payload
    },
    setIsDealModalOpen: (
      state: T,
      action: PayloadAction<T['isDealModalOpen']>
    ) => {
      state.isDealModalOpen = action.payload
    },
    setSelectedExpertId: (
      state: T,
      action: PayloadAction<T['selectedExpertId']>
    ) => {
      state.selectedExpertId = action.payload
    },
    setHoveredExpert: (state: T, action: PayloadAction<T['hoveredExpert']>) => {
      state.hoveredExpert = action.payload
    },
  }

  const reducers = {
    ...baseReducers,
    ...injectedReducers,
  }

  const slice = createBaseSlice<T, R & typeof baseReducers>({
    sliceName: EXPERT_SLICE_KEY,
    defaultState,
    reducers,
  })

  return { ...slice, selectors } as typeof slice & {
    selectors: typeof selectors
  }
}

export default createSlice
