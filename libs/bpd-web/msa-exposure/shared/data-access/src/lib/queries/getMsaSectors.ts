import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { getMsaSectorsSource, GetMsaSectorsSource } from '../sources'
import type { MsaExposureCartoBuilder } from '../types'

export interface MsaSectors {
  sector: string
}

export type GetMsaSectorsResult = MsaSectors[]

const getMsaSectors = (builder: MsaExposureCartoBuilder) =>
  QueryBuilder.get<GetMsaSectorsResult, GetMsaSectorsSource>(
    builder,
    getMsaSectorsSource,
    [TAGS.MSA_EXPOSURE_CARTO_TAG]
  )

export default getMsaSectors
