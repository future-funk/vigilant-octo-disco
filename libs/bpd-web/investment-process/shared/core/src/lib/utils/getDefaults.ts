import { DeepPartial } from '@bpd/utils/typescript-utils'
import { merge } from 'lodash'
import { defaults } from '../configs'
import { Config } from '@bpd/bpd-web/shared/core'

const getDefaults = (props: DeepPartial<Config>) => merge({}, defaults, props)

export default getDefaults
