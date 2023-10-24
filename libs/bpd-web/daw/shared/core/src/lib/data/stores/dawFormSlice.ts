import { createSlice } from '@bpd/daw/shared/data-access'
import { DEAL_REQ_TYPE } from '@bpd/ui/constants'

interface State {
  [key: string]: {
    initial: any
    values: any
  }
}

const defaultState: State = {
  deal: {
    initial: {
      requestType: DEAL_REQ_TYPE.DIRECT_INVESTMENT,
    },
    values: {
      requestType: DEAL_REQ_TYPE.DIRECT_INVESTMENT,
    },
  },
}

const DawFormSlice = createSlice({
  defaultState,
  reducers: {},
})

export const DawFormActions = DawFormSlice.actions

export const DawFormSelectors = DawFormSlice.selectors

export default DawFormSlice
