import { createSlice } from '@bpd/credit-portal/shared/data-access'

export interface SliceState {
  reportingDate: string
}

export const INITIAL_STATE: SliceState = {
  reportingDate: null,
}

export const slice = createSlice({
  defaultState: INITIAL_STATE,
  reducers: {},
})

export const CreditPortalActions = slice.actions

export const CreditPortalSelectors = slice.selectors

export default slice
