import { createModule } from '@bpd/bpd-web/shared/store'
import {
  INITIAL_STATE,
  PageConfig,
  EsgPortalSlice,
  createBaseModules,
} from '@bpd/esg-portal/shared/core'
import slots from './slots'

const esgPortalConfig: PageConfig = {
  path: '/',
  modules: [
    ...createBaseModules({
      viewState: {
        latitude: 51.5074,
        longitude: 0.1278,
        zoom: 8,
      },
    }),
    {
      id: EsgPortalSlice.name,
      module: createModule(EsgPortalSlice.name, EsgPortalSlice.reducer),
      onInit: (dispatch) =>
        dispatch(EsgPortalSlice.actions.reset(INITIAL_STATE)),
    },
  ],
  slots,
}

export default esgPortalConfig
