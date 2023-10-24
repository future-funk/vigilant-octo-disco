import { Builder, QueryBuilder } from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_DEAL_TAG } from '../constants'
import { Deal } from '../types'

export type GetDealResult = Deal

export type GetDealPayload = {
  dealId?: string
}

const getDeal = (builder: Builder) =>
  QueryBuilder.get<GetDealResult, GetDealPayload>(
    builder,
    ({ dealId }) => ({
      url: `${generatePath(ENDPOINTS.DEALS_BY_ID, { dealId })}`,
    }),
    [DAW_DEAL_TAG]
  )

export default getDeal
