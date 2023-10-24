import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { getTopMsaAssetsSource, GetTopMsaAssetsSource } from '../sources'
import type { MsaExposureCartoBuilder } from '../types'
import type { BaseMsaAsset } from './getMsaAssets'
import { orderBy } from 'lodash'

const msaPriority: { [key: string]: number } = {
  All: 2,
  Others: 1,
}

export interface TopMsaAsset extends BaseMsaAsset {
  msaShortName: string
  rank: number
}

export type GetTopMsaAssetsResult = TopMsaAsset[]

const getTopMsaAssets = (builder: MsaExposureCartoBuilder) =>
  QueryBuilder.get<GetTopMsaAssetsResult, GetTopMsaAssetsSource>(
    builder,
    getTopMsaAssetsSource,
    [TAGS.MSA_EXPOSURE_CARTO_TAG],
    {
      transformResponse: (response: GetTopMsaAssetsResult) =>
        orderBy(response, (msaData) => msaPriority[msaData.msaShortName] || 0),
    }
  )

export default getTopMsaAssets
