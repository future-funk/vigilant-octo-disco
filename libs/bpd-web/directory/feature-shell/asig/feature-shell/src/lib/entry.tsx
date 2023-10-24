import { PageTemplate } from '@bpd/bpd-web/directory/feature-shell/shared/core'
import { config as directoryConfig } from './config'

const Entry = () => <PageTemplate config={{...directoryConfig}} />
export default Entry