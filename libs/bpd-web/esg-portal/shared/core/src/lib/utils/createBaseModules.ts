import { createModule, ModuleConfigs } from '@bpd/bpd-web/shared/store'
import {
  CARTO_SLICE_KEY,
  createSlice,
  mapReducer,
  MAP_SLICE_KEY,
} from '@bpd/vendors/carto'
import { ViewState } from '@carto/react-redux'

export interface CreateBaseModulesOptions {
  viewState: ViewState
}

const createBaseModules = (
  options: CreateBaseModulesOptions
): ModuleConfigs => {
  const { viewState } = options

  const cartoReducer = createSlice(viewState)

  return [
    { module: createModule(MAP_SLICE_KEY, mapReducer) },
    { module: createModule(CARTO_SLICE_KEY, cartoReducer) },
  ]
}

export default createBaseModules
