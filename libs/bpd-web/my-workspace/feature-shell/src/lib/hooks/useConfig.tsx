import { UseConfig } from '@bpd/bpd-web/shared/core'
import { useCreateModules, WorkspacePage } from '@bpd/my-workspace/shared/core'

const useConfig: UseConfig = () => {
  const { modules } = useCreateModules()
  return {
    page: {
      path: '*',
      modules,
      slots: {
        main: <WorkspacePage />,
      },
    },
  }
}

export default useConfig
