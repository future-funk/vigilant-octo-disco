import { UseConfig } from '@bpd/daw/shared/core'
import { DEFAULT_STATE } from '../constants'
import { ROUTES } from '@bpd/bpd-web/shared/config'
import { utilGetUseConfig } from '@bpd/daw/shared/project'

const useConfig = utilGetUseConfig({
  defaultState: { ...DEFAULT_STATE },
  baseRoutePath: ROUTES.INVESTMENT_PROCESS.US.TRACKER,
}) as UseConfig

export default useConfig
