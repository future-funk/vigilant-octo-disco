import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { LogisticsCartoBuilder, LogisticsResponseDto } from '../types'
import { LOGISTICS_CARTO_TAG } from '../constants'
import {
  getAssetsSource,
  GetAssetsSource,
} from '../sources'

export type GetAssetsResult = LogisticsResponseDto[]

const getAssets = (builder: LogisticsCartoBuilder) =>
  QueryBuilder.get<GetAssetsResult, GetAssetsSource>(builder, getAssetsSource, [
    LOGISTICS_CARTO_TAG,
  ])

export default getAssets
