import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import {
  DIRECTORY_CARTO_TAG,
  DirectoryCartoBuilder,
} from '@bpd/bpd-web/directory/feature-shell/shared/data-access/directory'
import { getLocationSource, GetLocationSource } from '../sources'
import { LocationDto } from '../../types'

export type GetLocationResult = LocationDto[]

const getLocation = (builder: DirectoryCartoBuilder) =>
  QueryBuilder.get<GetLocationResult, GetLocationSource>(
    builder,
    getLocationSource,
    [DIRECTORY_CARTO_TAG]
  )

export default getLocation
