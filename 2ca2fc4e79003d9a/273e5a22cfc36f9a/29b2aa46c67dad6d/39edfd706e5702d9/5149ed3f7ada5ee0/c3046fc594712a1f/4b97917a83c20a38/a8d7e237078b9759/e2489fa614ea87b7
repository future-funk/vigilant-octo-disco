import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { getMsaAssetsSource, GetMsaAssetsSource } from '../sources'
import type { MsaExposureCartoBuilder } from '../types'
import { chain } from 'lodash'

const sectorPriority: { [key: string]: number } = {
  'All Sector': 2,
  Others: 1,
}

export interface BaseMsaAsset {
  assetNmvUsd: number
  percent: number
}
export interface MsaAsset extends BaseMsaAsset {
  sector: string
  type: 'Primary Market' | 'Top 25 MSA'
}

export type GetMsaAssetsResult = MsaAsset[]

const getMsaAssets = (builder: MsaExposureCartoBuilder) =>
  QueryBuilder.get<GetMsaAssetsResult, GetMsaAssetsSource>(
    builder,
    getMsaAssetsSource,
    [TAGS.MSA_EXPOSURE_CARTO_TAG],
    {
      transformResponse: (response: GetMsaAssetsResult) =>
        chain(response)
          .map((msaData: MsaAsset) => ({
            ...msaData,
          }))
          .orderBy((msaData: MsaAsset) => sectorPriority[msaData.sector] || 0)
          .value(),
    }
  )

export default getMsaAssets
