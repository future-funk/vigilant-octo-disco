import {
  MvIrrApi,
  createSlice,
} from '@bpd/mv-irr/shared/data-access'
import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { maxBy } from 'lodash'

export interface SliceState {
  filters: {
    fiscalYear: string | null
    currency: string | null
    activeProjCcy: string | null
  }
  metaData: {
    endFy: null | number
    portfolioLastUpdatedDt: null | string
    projectLastUpdatedDt: null | string
  }
}

export const defaultMvIrrState: SliceState = {
  filters: {
    fiscalYear: '2022-04-01',
    currency: 'USD',
    activeProjCcy: 'All',
  },
  metaData: {
    endFy: null,
    portfolioLastUpdatedDt: null,
    projectLastUpdatedDt: null,
  },
}

const extraReducers = (builder: ActionReducerMapBuilder<SliceState>) => {
  builder.addMatcher(
    MvIrrApi.endpoints.getEndFy.matchFulfilled,
    (state, action) => {
      state.metaData.endFy = action.payload.fy
    }
  )

  builder.addMatcher(
    MvIrrApi.endpoints.getPortfolioSummary.matchFulfilled,
    (state, action) => {
      state.metaData.portfolioLastUpdatedDt = maxBy(
        action.payload,
        'lastUpdateDt'
      )?.lastUpdateDt
    }
  )

  builder.addMatcher(
    MvIrrApi.endpoints.getProjectSummary.matchFulfilled,
    (state, action) => {
      state.metaData.projectLastUpdatedDt = maxBy(
        action.payload,
        'lastUpdateDt'
      )?.lastUpdateDt
    }
  )
}

const slice = createSlice({
  defaultState: defaultMvIrrState,
  reducers: {},
  extraReducers,
})

export const MvIrrActions = slice.actions

export const MvIrrSelectors = slice.selectors

export default slice
