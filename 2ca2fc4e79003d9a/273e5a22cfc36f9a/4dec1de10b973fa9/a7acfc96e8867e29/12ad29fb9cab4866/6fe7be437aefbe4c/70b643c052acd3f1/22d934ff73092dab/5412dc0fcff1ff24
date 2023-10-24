import { createBaseModules } from '@bpd/bpd-web/directory/feature-shell/shared/core'
import { createModule, ModuleConfigs } from '@bpd/bpd-web/shared/store'
import { setViewState, ViewState } from '@carto/react-redux'
import { AnyAction, Slice } from '@reduxjs/toolkit'
import { injectCartoEndpoints as injectLogisticsDirectoryCartoEndpoints } from '../../data'
export interface CreateModulesConfigOptions {
  slices: { directory: Slice }
  viewState: ViewState
}

const createModulesConfig = (
  options: CreateModulesConfigOptions
): ModuleConfigs => {
  const { slices, viewState } = options

  return [
    ...createBaseModules({ viewState }),
    {
      module: createModule(slices.directory.name, slices.directory.reducer),
      reset: true,
      onInit: (dispatch) => {
        injectLogisticsDirectoryCartoEndpoints()
        dispatch(setViewState(viewState) as unknown as AnyAction)
      },
    },
  ]
}

export default createModulesConfig
