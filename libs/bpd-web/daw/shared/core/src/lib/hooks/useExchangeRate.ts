import { DawBlueprintApiQueries } from '@bpd/daw/shared/data-access'
import { SUPPORTED_EXCHANGE_BASE_CURRENCIES } from '@bpd/ui/constants'
import { first, last, some, toPath } from 'lodash'
import { useEffect, useMemo } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

interface ExchangeRateData {
  baseCurrency: string
  targetCurrency: string
  lcToUsdRate: number
  lcToUsdRatePathString: string
  shouldSwapTargetCurrency: boolean
}

export interface useExchangeRateProps {
  name: string
}

const useExchangeRate = ({ name }: useExchangeRateProps): ExchangeRateData => {
  const { setValue, getValues } = useFormContext()

  const baseCurrency = 'USD'

  const path = useMemo(() => toPath(name), [name])

  const currencyPathString = `projects[${path[1]}].currency`

  const lcToUsdRatePathString = `projects[${path[1]}].approval.lcToUsdRate`

  const exchangeRatePathString = `projects[${path[1]}].approval.exchangeRate`

  const [targetCurrency, lcToUsdRate] = useWatch({
    name: [currencyPathString, lcToUsdRatePathString],
  })

  const shouldSwapTargetCurrency =
    SUPPORTED_EXCHANGE_BASE_CURRENCIES[baseCurrency].includes(targetCurrency)

  const queryParams = shouldSwapTargetCurrency
    ? [targetCurrency, baseCurrency]
    : [baseCurrency, targetCurrency]

  const { data } = DawBlueprintApiQueries.useGetExchangeRate(
    queryParams as [string, string]
  )

  useEffect(() => {
    if (data) {
      setValue(exchangeRatePathString, data)
    }
  }, [data, exchangeRatePathString, setValue])

  return {
    baseCurrency: first(queryParams),
    targetCurrency: last(queryParams),
    lcToUsdRate,
    lcToUsdRatePathString,
    shouldSwapTargetCurrency,
  }
}

export default useExchangeRate
