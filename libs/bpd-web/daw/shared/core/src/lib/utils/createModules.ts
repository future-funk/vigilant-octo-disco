import { createModule, ModuleConfigs } from '@bpd/bpd-web/shared/store'
import { DawFormSlice } from '../data'
import { DawUiSlice, UiState } from '@bpd/daw/shared/data-access'
import { Team } from '@bpd/bpd-web/shared/data-access'

export interface CreateModulesProps<T> {
  defaultUiState?: T
}

const createModules = <T extends UiState>(
  props: CreateModulesProps<T>
): ModuleConfigs => {
  const { defaultUiState } = props

  return [
    {
      id: DawUiSlice.name,
      module: createModule(DawUiSlice.name, DawUiSlice.reducer),
      onInit: (dispatch) =>
        !!defaultUiState && dispatch(DawUiSlice.actions.reset(defaultUiState)),
    },
    {
      id: DawFormSlice.name,
      module: createModule(DawFormSlice.name, DawFormSlice.reducer),
    },
  ]
}

export default createModules
