import { UseConfig } from '@bpd/bpd-web/shared/core'
import { createModule } from '@bpd/bpd-web/shared/store'
import { MsaExposureSlice } from '@bpd/msa-exposure/shared/core'
import { FilterBar, PortfolioDashboard } from '@bpd/msa-exposure/shared/core'

const useConfig: UseConfig = () => {
  return {
    page: {
      path: 'msa-exposure/*',
      modules: [
        {
          id: MsaExposureSlice.name,
          module: createModule(MsaExposureSlice.name, MsaExposureSlice.reducer),
        },
      ],
      slots: {
        main: <PortfolioDashboard />,
        top: {
          left: <FilterBar />,
        },
      },
    },
  }
}

export default useConfig
