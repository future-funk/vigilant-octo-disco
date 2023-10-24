import { Page } from '@bpd/fund-portal/shared/core'
import { config as fundPortalConfig } from './configs'

const Entry = () => <Page configs={[fundPortalConfig]} />

export default Entry
