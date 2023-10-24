import { createModule } from '@bpd/bpd-web/shared/store'
import {
  CreditPortalSlice,
  INITIAL_STATE,
  PageConfig,
} from '@bpd/credit-portal/shared/core'

import slots from './slots'

const exportConfig: PageConfig = {
  path: '/',
  modules: [
    {
      id: CreditPortalSlice.name,
      module: createModule(CreditPortalSlice.name, CreditPortalSlice.reducer),
      onInit: (dispatch) =>
        dispatch(CreditPortalSlice.actions.reset(INITIAL_STATE)),
    },
  ],
  slots,
}

export default exportConfig
