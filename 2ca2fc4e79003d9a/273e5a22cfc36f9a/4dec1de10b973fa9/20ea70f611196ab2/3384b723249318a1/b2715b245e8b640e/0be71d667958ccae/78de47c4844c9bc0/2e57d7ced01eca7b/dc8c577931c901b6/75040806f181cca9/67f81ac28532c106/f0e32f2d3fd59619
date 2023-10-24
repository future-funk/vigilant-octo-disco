import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import {
  DIRECTORY_CARTO_TAG,
  Directory,
  DirectoryCartoBuilder,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { getAssetsSource, GetAssetsSource } from '../sources'
import { FilterDto } from '../../types'

export type GetAssetsResult = Directory[]

const getAssets = (builder: DirectoryCartoBuilder) =>
  QueryBuilder.get<GetAssetsResult, GetAssetsSource>(builder, getAssetsSource, [
    DIRECTORY_CARTO_TAG,
  ])

export default getAssets
