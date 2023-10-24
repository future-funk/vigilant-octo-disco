import { getSourceId } from '@bpd/bpd-web/shared/data-access'
import { curry } from 'lodash'

const scopeId = curry(getSourceId)('MSA_EXPOSURE')

export default scopeId
