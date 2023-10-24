import { createModule } from '@bpd/bpd-web/shared/store'
import { ExpertSlice, INITIAL_STATE } from '../data'
import { PageConfig } from '../components'

import slots from './slots'

const exportConfig: PageConfig = {
    path: '/',
    modules: [
      {
        id: ExpertSlice.name,
        module: createModule(ExpertSlice.name, ExpertSlice.reducer),
        onInit: (dispatch) =>
          dispatch(ExpertSlice.actions.reset(INITIAL_STATE)),
      },
    ],
    slots,
  }

  export default exportConfig