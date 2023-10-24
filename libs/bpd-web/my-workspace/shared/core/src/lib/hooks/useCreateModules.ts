import {
  INVESTMENT_PROCESS_SLICE_KEY,
  createSlice as createInvestmentProcessSlice,
} from '@bpd/bpd-web/investment-process/shared/data-access'
import { ModuleConfigs, createModule } from '@bpd/bpd-web/shared/store'
import { useGetInvestmentProcessDefaultState } from '.'
import { MyWorkspaceSlice } from '../data'

const useCreateModules = () => {
  // Investment process
  const { defaultState: investmentProcessDefaultState } =
    useGetInvestmentProcessDefaultState()
  const investmentProcessSlice = createInvestmentProcessSlice({
    defaultState: investmentProcessDefaultState,
    reducers: {},
  })

  const modules: ModuleConfigs = [
    {
      id: MyWorkspaceSlice.name,
      module: createModule(MyWorkspaceSlice.name, MyWorkspaceSlice.reducer),
      // onInit: (dispatch) => dispatch(MyWorkspaceSlice.actions.reset(DEFAULT_STATE)),
      // onDestroy: (dispatch) => dispatch(MyWorkspaceSlice.actions.reset(null)),
    },
    {
      id: 'people',
      module: createModule(
        INVESTMENT_PROCESS_SLICE_KEY,
        investmentProcessSlice.reducer
      ),
      onInit: (dispatch) =>
        dispatch(
          investmentProcessSlice.actions.reset(investmentProcessDefaultState)
        ),
      onDestroy: (dispatch) =>
        dispatch(investmentProcessSlice.actions.reset(null)),
    },
  ]

  return { modules }
}

export default useCreateModules
