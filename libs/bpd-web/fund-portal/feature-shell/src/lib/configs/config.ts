import { createModule } from '@bpd/bpd-web/shared/store'
import {
  FundPortalSlice,
  INITIAL_STATE,
  PageConfig,
} from '@bpd/fund-portal/shared/core'

import slots from './slots'

const exportConfig: PageConfig = {
  path: '/',
  modules: [
    {
      id: FundPortalSlice.name,
      module: createModule(FundPortalSlice.name, FundPortalSlice.reducer),
      onInit: (dispatch) =>
        dispatch(FundPortalSlice.actions.reset(INITIAL_STATE)),
    },
  ],
  slots,
}

export default exportConfig
