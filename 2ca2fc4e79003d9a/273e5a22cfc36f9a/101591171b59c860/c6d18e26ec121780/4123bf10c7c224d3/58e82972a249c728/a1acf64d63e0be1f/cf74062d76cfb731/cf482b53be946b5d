import {
  Builder,
  QueryBuilder,
  QueryPayload,
} from '@bpd/bpd-web/shared/data-access'
import { ENDPOINTS, DAW_TAG } from '../constants'

export type GetExchangeRateResult = number

export type GetExchangeRatePayload = [string, string]

const getExchangeRate = (builder: Builder) =>
  QueryBuilder.get<GetExchangeRateResult, GetExchangeRatePayload>(
    builder,
    ([baseCurrency, targetCurrency]) => ({
      url: `${ENDPOINTS.EXCHANGE_RATES}/${baseCurrency}/${targetCurrency}`,
    }),
    [DAW_TAG]
  )

export default getExchangeRate
