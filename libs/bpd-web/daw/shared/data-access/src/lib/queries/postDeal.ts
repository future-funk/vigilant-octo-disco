import {
  Builder,
  createQueryParams,
  QueryBuilder,
} from '@bpd/bpd-web/shared/data-access'
import { Team } from '@bpd/ui/constants'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_TAG } from '../constants'

export type PostDealResult = unknown

export type PostDealPayload = {
  body: unknown //it could be deal,project,resource based on category.
  team: Team | null
}

const postDeal = (builder: Builder) =>
  QueryBuilder.post<PostDealResult, PostDealPayload>(
    builder,
    ({ body, team }) => ({
      url: `${generatePath(ENDPOINTS.DEALS)}${createQueryParams([
        ['team', team],
      ])}`,
      body,
    })
  )

export default postDeal
