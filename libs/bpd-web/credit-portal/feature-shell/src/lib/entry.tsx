import { Page } from '@bpd/credit-portal/shared/core'
import { config as creditPortalConfig } from './configs'

const Entry = () => <Page configs={[creditPortalConfig]} />

export default Entry
