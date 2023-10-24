import { createModule, ModuleConfigs } from '@bpd/bpd-web/shared/store'
import { MARKET_TRANSACTIONS_SLICE_KEY } from '@bpd/market-transactions/shared/data-access'
import { MarketTransactionsSlice, SliceState } from '../data'

export interface CreateModulesProps<T> {
  defaultState: SliceState
  id: string
}

const createModules = <T extends { filters: unknown }>(
  props: CreateModulesProps<T>
): ModuleConfigs => {
  const { defaultState, id } = props

  const slice = MarketTransactionsSlice

  return [
    {
      id,
      module: createModule(MARKET_TRANSACTIONS_SLICE_KEY, slice.reducer),
      onDestroy: (dispatch) => dispatch(slice.actions.reset(defaultState)),
    },
  ]
}

export default createModules
