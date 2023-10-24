import { Builder, QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { ENDPOINTS } from '../constants'
import { generatePath } from 'react-router-dom'

interface PostRefreshProjectPayload {
  url: {
    fiscalYear: string
    team: string
    projId: string
  }
}

export interface PostRefreshProjectResult {}

const postRefreshProject = (builder: Builder) =>
  QueryBuilder.post<PostRefreshProjectResult, PostRefreshProjectPayload>(
    builder,
    ({ url: { fiscalYear, team, projId } }) => ({
      url: generatePath(ENDPOINTS.MVIRR.REFRESH_PROJECT, {
        team,
        fiscalYear,
        projId,
      }),
    }),
    []
  )

export default postRefreshProject
