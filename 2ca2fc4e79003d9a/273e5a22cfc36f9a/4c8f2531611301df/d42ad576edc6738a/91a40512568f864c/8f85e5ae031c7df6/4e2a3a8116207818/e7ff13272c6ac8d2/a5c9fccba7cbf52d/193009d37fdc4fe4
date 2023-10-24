import { createSlice } from '@bpd/bpd-web/investment-process/shared/data-access'
import { SortConfig } from '@bpd/bpd-web/shared/ui'

export interface SliceState {
  filters: Record<string, any>
  staff: string | null
  sort: SortConfig | null
  isFetching: boolean
  getDealsArgs: Record<string, any>
}

const defaultState: SliceState = {
  filters: {},
  staff: null,
  sort: null,
  isFetching: false,
  getDealsArgs: {},
}

const slice = createSlice({ defaultState, reducers: {} })

export const InvestmentProcessActions = slice.actions

export const InvestmentProcessSelectors = slice.selectors

export default slice
