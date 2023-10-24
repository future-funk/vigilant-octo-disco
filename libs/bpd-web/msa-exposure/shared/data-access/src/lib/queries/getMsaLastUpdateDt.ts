import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { getMsaLastUpdateDtSource, GetMsaLastUpdateDtSource } from '../sources'
import type { MsaExposureCartoBuilder } from '../types'

export interface MsaLastUpdateDt {
  lastUpdateDt: string
}

export type GetMsaLastUpdateDtResult = MsaLastUpdateDt[]

const getMsaLastUpdateDt = (builder: MsaExposureCartoBuilder) =>
  QueryBuilder.get<GetMsaLastUpdateDtResult, GetMsaLastUpdateDtSource>(
    builder,
    getMsaLastUpdateDtSource,
    [TAGS.MSA_EXPOSURE_CARTO_TAG]
  )

export default getMsaLastUpdateDt
