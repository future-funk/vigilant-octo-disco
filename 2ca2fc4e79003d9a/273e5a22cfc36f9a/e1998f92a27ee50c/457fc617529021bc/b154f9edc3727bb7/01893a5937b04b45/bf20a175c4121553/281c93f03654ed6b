import { createModule } from '@bpd/bpd-web/shared/store'
import {
  INITIAL_STATE,
  PageConfig,
  PortalSlice,
} from '@bpd/esg-ade-portal/shared/core'

import slots from './slots'

const exportConfig: PageConfig = {
  path: '/',
  modules: [
    {
      id: PortalSlice.name,
      module: createModule(PortalSlice.name, PortalSlice.reducer),
      onInit: (dispatch) =>
        dispatch(PortalSlice.actions.reset(INITIAL_STATE)),
    },
  ],
  slots,
}

export default exportConfig
