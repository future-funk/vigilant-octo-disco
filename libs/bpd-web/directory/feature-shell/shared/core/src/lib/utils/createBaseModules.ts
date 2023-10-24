import { createModule, ModuleConfigs } from '@bpd/bpd-web/shared/store'
import {
  CARTO_SLICE_KEY,
  createSlice,
  mapReducer,
  MAP_SLICE_KEY,
} from '@bpd/vendors/carto'
import {
  googleMapsApiReducer,
  GOOGLE_MAPS_API_SLICE_KEY,
} from '@bpd/vendors/google-maps'
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
    { module: createModule(GOOGLE_MAPS_API_SLICE_KEY, googleMapsApiReducer) },
  ]
}

export default createBaseModules
