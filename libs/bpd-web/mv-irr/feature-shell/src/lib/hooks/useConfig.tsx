import { UseConfig } from '@bpd/bpd-web/shared/core'
import { MvIrrSlice, defaultMvIrrState } from '@bpd/mv-irr/shared/core'
import { createModule } from '@bpd/bpd-web/shared/store'
import { MV_IRR_SLICE_KEY } from '@bpd/mv-irr/shared/data-access'
import { MvActionBar, MvDashboard, MvTopBar } from '@bpd/mv-irr/shared/core'

const useConfig: UseConfig = () => {
  return {
    page: {
      path: 'irr-projection/*',
      modules: [
        {
          id: MvIrrSlice.name,
          module: createModule(MV_IRR_SLICE_KEY, MvIrrSlice.reducer),
          onInit: (dispatch) =>
            dispatch(MvIrrSlice.actions.reset(defaultMvIrrState)),
          onDestroy: (dispatch) =>
            dispatch(MvIrrSlice.actions.reset(defaultMvIrrState)),
        },
      ],
      slots: {
        main: <MvDashboard />,
        top: {
          left: <MvTopBar />,
          right: <MvActionBar />,
          rightProps: {
            sx: {
              alignSelf: 'flex-end',
            },
          },
        },
      },
    },
  }
}

export default useConfig
