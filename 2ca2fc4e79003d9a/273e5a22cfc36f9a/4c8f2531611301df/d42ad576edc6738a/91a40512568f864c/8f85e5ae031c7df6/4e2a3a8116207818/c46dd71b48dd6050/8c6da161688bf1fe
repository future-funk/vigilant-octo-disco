import {
  createSlice,
  INVESTMENT_PROCESS_SLICE_KEY,
} from '@bpd/bpd-web/investment-process/shared/data-access'
import { createModule, ModuleConfigs } from '@bpd/bpd-web/shared/store'
import { SortConfig } from '@bpd/bpd-web/shared/ui'

export interface CreateModulesProps<T> {
  defaultState: T
  id: string
}

const createModules = <
  T extends { filters: unknown; staff?: string; sort?: SortConfig }
>(
  props: CreateModulesProps<T>
): ModuleConfigs => {
  const { defaultState, id } = props

  const slice = createSlice({ defaultState, reducers: {} })

  return [
    {
      id,
      module: createModule(INVESTMENT_PROCESS_SLICE_KEY, slice.reducer),
      onInit: (dispatch) => dispatch(slice.actions.reset(defaultState)),
      onDestroy: (dispatch) => dispatch(slice.actions.reset(null)),
    },
  ]
}

export default createModules
