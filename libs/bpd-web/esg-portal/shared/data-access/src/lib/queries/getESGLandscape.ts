import { QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { TAGS } from '../constants'
import { getESGLandscapeSource, GetESGLandscapeSource } from '../sources'
import { ESGCartoBuilder, ESGPortalRequestPayload } from '../types'

export type GetESGLandscapeResults = ESGPortalRequestPayload[]

const getESG = (builder: ESGCartoBuilder) =>
  QueryBuilder.get<GetESGLandscapeResults, GetESGLandscapeSource>(builder, getESGLandscapeSource, [
    TAGS.ESG_LANDSCAPE,
  ])

export default getESG
