import {
  Builder,
  createQueryParams,
  QueryBuilder,
} from '@bpd/bpd-web/shared/data-access'
import { generatePath } from 'react-router-dom'
import { ENDPOINTS, DAW_TAG } from '../constants'

export type CounterParties =
  | 'sellers'
  | 'brokers'
  | 'partners'
  | 'buyers'
  | 'legalreps'

export type GetCounterPartiesResult = string[]

export type GetCounterPartiesPayload = {
  type: CounterParties
  query?: string
}

const getCounterParties = (builder: Builder) =>
  QueryBuilder.get<GetCounterPartiesResult, GetCounterPartiesPayload>(
    builder,
    ({ type, query }) => ({
      url: `${generatePath(ENDPOINTS.COUNTER_PARTIES, {
        type,
      })}${createQueryParams([
        ['q', query],
        ['limit', 10],
      ])}`,
    }),
    [DAW_TAG]
  )

export default getCounterParties
