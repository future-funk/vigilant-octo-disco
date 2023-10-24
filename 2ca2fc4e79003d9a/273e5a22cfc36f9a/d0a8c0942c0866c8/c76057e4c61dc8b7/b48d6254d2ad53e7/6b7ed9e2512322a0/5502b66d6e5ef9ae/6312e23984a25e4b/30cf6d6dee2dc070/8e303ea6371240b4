import { createSlice } from '@bpd/market-transactions/shared/data-access'
import { DEFAULT_STATE } from '../../constants'

export interface SliceState {
  filters: Record<string, any>
}

export const defaultState: SliceState = DEFAULT_STATE

const slice = createSlice({ defaultState, reducers: {} })

export const MarketTransactionsActions = slice.actions

export const MarketTransactionsSelectors = slice.selectors

export default slice
