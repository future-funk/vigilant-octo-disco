// No need of this file as it is not goint to stand alone feature. will act as lib.
import { PageTemplate } from '@bpd/bpd-web/directory/feature-shell/shared/core'
import { config as logisticConfig } from './config'

const Entry = () => <PageTemplate config={{ ...logisticConfig }} />
export default Entry
